def swap(nums: List[int], a: int, b: int) -> None:
    s = nums[a]
    nums[a] = nums[b]
    nums[b] = s

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        k = k % n
        # for i in range(0, k+1):
        #     a = ((n*2)-k-i-1)%n
        #     b = ((n*2)-i-1)%n
        #     c = ((n*2)-i-2)%n
        #     print (a,b,c)
        #     swap(nums, a, b)
        #     print(nums)
        #     swap(nums, a, c)
        #     print(nums)

        mem = nums[n-k:n]
        for i in range(n-1, 0, -1):
            nums[i] = nums[i-k]
        for i in range(0, len(mem)):
            nums[i] = mem[i]
        
        # for k in range(0, k):
        #     mem = nums[n-1]
        #     for i in range(n-1, 0, -1):
        #         nums[i] = nums[i-1]
        #     nums[0] = mem

        # helper = nums.copy()
        # for i in range(0, n):
        #     source = (n*2 - k + i) % n
        #     nums[i] = helper[source]
