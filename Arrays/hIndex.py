class Solution:
    def hIndex(self, citations: list[int]) -> int:
        citations.sort()
        h = len(citations)

        for i in range(0, len(citations)):
            print(citations[i], len(citations[i:]), h)
            if citations[i] < len(citations[i:]):
                h = len(citations[i:])-1

        return h

test_cases = [
    ([3,0,6,1,5], 3),
    ([1,3,1], 1),
    ([100], 1),
    ([0,0], 0),
    ([4,4,0,0], 2)
]

if __name__ == "__main__":

    for i in range(0, len(test_cases)):
        test_case = test_cases[i]
        print("=== TEST {number} ===".format(number=i+1))
        output = Solution().hIndex(test_case[0])
        print(output)
        print(output == test_case[1])
