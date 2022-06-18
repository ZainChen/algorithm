class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        k = 0
        result = []
        for i in nums:
            k += i
            result.append(k)
        return result

if __name__ == '__main__':
    nums = [1, 2, 3, 4]
    solution = Solution()
    result = solution.runningSum(nums)
    print(result)