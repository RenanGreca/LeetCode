class Solution:
    def canJump(self, nums: list[int]) -> bool:
        spot = len(nums)-1

        for i in range(len(nums)-2, -1, -1):
            if nums[i] >= spot-i:
                spot = i

        return spot == 0

test_cases = [
    ([2,3,1,1,4], True),
    ([3,2,1,0,4], False),
    ([2,3,1,0,4], True)
]

if __name__ == "__main__":

    for i in range(0, len(test_cases)):
        test_case = test_cases[i]
        print("=== TEST {number} ===".format(number=i+1))
        output = Solution().canJump(test_case[0])
        # print(output)
        print(output == test_case[1])
