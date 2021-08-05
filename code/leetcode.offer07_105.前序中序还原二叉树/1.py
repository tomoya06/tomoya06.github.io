# ##剑指offer##levelm
# @lc app=leetcode.cn id=105 lang=python3
#
# [105]
#

# TODO: 搞一个迭代版的

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if len(preorder) == 0:
            return None
        mid = preorder[0]
        inidx = inorder.index(mid)
        leftPreorder = preorder[1:inidx+1]
        leftInorder = inorder[0:inidx]
        rightPreorder = preorder[inidx+1:]
        rightInorder = inorder[inidx+1:]
        midNode = TreeNode(mid)
        midNode.left = self.buildTree(leftPreorder, leftInorder)
        midNode.right = self.buildTree(rightPreorder, rightInorder)
        return midNode

# @lc code=end

