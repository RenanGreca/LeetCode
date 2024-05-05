class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        buy = 0

        profit = 0
        local_profit = 0

        for i in range(1, len(prices)):
            if prices[i] < prices[i-1]:
                buy = i
                profit += local_profit
                local_profit = 0
            if prices[i] - prices[buy] > local_profit:
                local_profit = prices[i] - prices[buy]
        
        return profit+local_profit


test_cases = [
    ([7,1,5,3,6,4], 7),
    ([1,2,3,4,5], 4),
    ([7,6,4,3,1], 0),
]

if __name__ == "__main__":

    for i in range(0, len(test_cases)):
        test_case = test_cases[i]
        print("=== TEST {number} ===".format(number=i+1))
        output = Solution().maxProfit(test_case[0])
        print(output)
        print(output == test_case[1])
