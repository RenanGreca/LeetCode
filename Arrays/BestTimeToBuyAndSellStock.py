class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0

        while len(prices) > 0:
            buy = 0
            for i in range(1, len(prices)):
                if prices[i] < prices[buy]:
                    buy = i
            
            sell = buy
            for i in range(buy, len(prices)):
                if prices[i] > prices[sell]:
                    sell = i

            max_profit = max(max_profit, prices[sell]-prices[buy])
            prices = prices[0:buy]

        return max_profit

    def maxProfitRecursive(self, prices: list[int]) -> int:
        if len(prices) == 0:
            return 0

        buy = 0
        for i in range(1, len(prices)):
            if prices[i] < prices[buy]:
                buy = i
        
        sell = buy
        for i in range(buy, len(prices)):
            if prices[i] > prices[sell]:
                sell = i

        prev_profit = self.maxProfit(prices[0:buy])

        return max(prev_profit, prices[sell]-prices[buy])


    def maxProfitNSquared(self, prices: list[int]) -> int:
        max_profit = 0
        for i in range(0, len(prices)):
            for j in range(i+1, len(prices)):
                if prices[j]-prices[i] > max_profit:
                    max_profit = prices[j]-prices[i]
        return max_profit

test_cases = [
    ([7,1,5,3,6,4], 5),
    ([7,6,4,3,1], 0),
    ([], 0),
    ([8], 0),
    ([8,1], 0),
    ([1,8], 7),
    ([7,2,5,3,7,4,1,3,4], 5),
    ([7,1,5,3,6,4,2,3,5,8], 7),
    ([7,1,5,3,6,4,4,4,5,8], 7),
    ([7,4,4,4,8,4,4,4,4,7], 4),
]

if __name__ == "__main__":

    for i in range(0, len(test_cases)):
        test_case = test_cases[i]
        print("=== TEST {number} ===".format(number=i+1))
        output = Solution().maxProfit(test_case[0])
        print(output)
        print(output == test_case[1])
