class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)
        
        k = 2
        i = 2
        while i < len(nums):
            print(i, k)
            print(nums)
            if nums[i] > nums[k-2]:
                s = nums[k]
                nums[k] = nums[i]
                nums[i] = s
                k += 1
            
            i += 1
        
        return k
