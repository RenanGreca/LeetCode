class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = nums[0]
        count = 1
        for i in range(1, len(nums)):
            if count == 0:
                candidate = nums[i]
            if nums[i] == candidate:
                count += 1
            else:
                count -= 1
        return candidate
        # nums.sort()
        # return nums[int(len(nums)/2)]
