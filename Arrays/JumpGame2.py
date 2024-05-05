class Solution:
    def jump(self, nums: list[int]) -> int:
        spot = len(nums)-1
        jumps = 0

        while spot > 0:
            max_i = spot-1
            for i in range(spot-1, -1, -1):
                if nums[i]+i >= spot:
                    max_i = i
            # `max_i` contains the smallest index that can reach `spot`
            spot = max_i
            jumps += 1

        return jumps

test_cases = [
    ([2,3,1,1,4], 2),
    ([2,3,0,1,4], 2),
    ([2,3,1,0,4], 2),
    ([2,3,1], 1)
]

if __name__ == "__main__":

    for i in range(0, len(test_cases)):
        test_case = test_cases[i]
        print("=== TEST {number} ===".format(number=i+1))
        output = Solution().jump(test_case[0])
        print(output)
        print(output == test_case[1])
