---
title: ElasticSearch 基础
date: 2019-09-23 16:34:35
categories:
- Java
- ElasticSearch
- 后端
---

> 介绍下ES的用法

<!-- more -->

## 简介

1. 面向文档：JSON文档，一个文档代表一个对象，对文档进行索引、检索、排序和过滤--而不是对行列数据

## 交互基础

1. 直接使用RESTful API通过端口9200与ES通信，甚至CURL

````
curl -X<VERB> '<PROTOCOL>://<HOST>:<PORT>/<PATH>?<QUERY_STRING>' -d '<BODY>'

/**
VERB
  适当的 HTTP 方法 或 谓词 : GET`、 `POST`、 `PUT`、 `HEAD 或者 `DELETE`。
PROTOCOL
  http 或者 https`（如果你在 Elasticsearch 前面有一个 `https 代理）
HOST
  Elasticsearch 集群中任意节点的主机名，或者用 localhost 代表本地机器上的节点。
PORT
  运行 Elasticsearch HTTP 服务的端口号，默认是 9200 。
PATH
  API 的终端路径（例如 _count 将返回集群中文档数量）。Path 可能包含多个组件，例如：_cluster/stats 和 _nodes/stats/jvm 。
QUERY_STRING
  任意可选的查询字符串参数 (例如 ?pretty 将格式化地输出 JSON 返回值，使其更容易阅读)
BODY
  一个 JSON 格式的请求体 (如果请求需要的话)
*/
````

2. 各自的语言客户端

## 基本操作

````
curl -X PUT "localhost:9200/megacorp/employee/1?pretty" -H 'Content-Type: application/json' -d'
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}
'

/**
megacorp
   索引名称
employee
   类型名称
1
   特定雇员的ID
*/
````

### 指令替换

* PUT：插入，需携带ID；对同一索引再次执行，则全文更新
* POST：新建，不用带ID，由ES自动生成ID
* GET：检索
* DELETE：删除
* HEAD：?检查文档是否存在

## 搜索

````
// 全部
curl -X GET "localhost:9200/megacorp/employee/_search?pretty"

// Query-string搜索
curl -X GET "localhost:9200/megacorp/employee/_search?q=last_name:Smith&pretty"

// 查询表达式搜索
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "match" : {
            "last_name" : "Smith"
        }
    }
}
'
````

## 高级搜索

````
// 更复杂的query，引入must/match; filter/range
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "bool": {
            "must": {
                "match" : {
                    "last_name" : "smith" 
                }
            },
            "filter": {
                "range" : {
                    "age" : { "gt" : 30 } 
                }
            }
        }
    }
}
'

// 全文搜索
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "match" : {
            "about" : "rock climbing"
        }
    }
}
'
// 返回
// "_score": 相关性得分

// 短语搜索/精确匹配搜索
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    }
}
'

// 高亮搜索
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
    "query" : {
        "match_phrase" : {
            "about" : "rock climbing"
        }
    },
    "highlight": {
        "fields" : {
            "about" : {}
        }
    }
}
'

````

## 聚合

````
curl -X GET "localhost:9200/megacorp/employee/_search?pretty" -H 'Content-Type: application/json' -d'
{
  "aggs": {
    "all_interests": {
      "terms": { "field": "interests" }
    }W
  }
}
'
````

## 搜索详解

### * 过滤 vs 查询

  * filter：不评分，速度快
  * query：评分，有相关度评分_score排序

### * 常用搜索指令

  * 一般参数
    * match_all / match / multi_match
    * range + gt / gte / lt / lte
    * term 精确值 / terms
    * exists / missing
  * bool 复合语句，合并多个查询语句，可接受以下参数
    * must 文档 必须 匹配这些条件才能被包含进来。
    * must_not 文档 必须不 匹配这些条件才能被包含进来。
    * should 如果满足这些语句中的任意语句，将增加 _score ，否则，无任何影响。它们主要用于修正每个文档的相关性得分
    * filter 必须 匹配，但它以不评分、过滤模式来进行。这些语句对评分没有贡献，只是根据过滤标准来排除或包含文档。

> must / must_not / should 都影响评分，filter跟must对最后得到的搜索结果作用一样，但filter不会对每项的相关度评分造成影响

### * 查询语句结构

````
QUERY_NAME := 一般参数
// 不针对字段
{
    QUERY_NAME: {
        ARGUMENT: VALUE,
        ARGUMENT: VALUE,...
    }
}
// 针对字段
{
    QUERY_NAME: {
        FIELD_NAME: {
            ARGUMENT: VALUE,
            ARGUMENT: VALUE,...
        }
    }
}
// 复合语句
{
   "bool": {
      BOOL_ARGUMENT: {
        QUERY_NAME: {
          ...
        }
      }
   }
}
````
