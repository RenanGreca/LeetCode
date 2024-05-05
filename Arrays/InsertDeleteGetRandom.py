import random

class RandomizedSet(object):
    

    def __init__(self):
        self.contents = [0]*2*100000
        self.aux = {}
        print(len(self.contents))

    def insert(self, val):
        """
        :type val: int
        :rtype: bool
        """

        if (self.contents[val] == 1):
            return False
        self.contents[val] = 1
        self.aux[val] = 1
        return True

    def remove(self, val):
        """
        :type val: int
        :rtype: bool
        """

        if (self.contents[val] == 0):
            return False
        self.contents[val] = 0
        del(self.aux[val])
        return True
        

    def getRandom(self):
        """
        :rtype: int
        """
        keys = list(self.aux.keys())
        return random.choice(keys)
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()

def test_case_1():
    obj = RandomizedSet()
    print("=== TEST 1 ===")
    result = []
    result.append(obj.insert(1))
    result.append(obj.remove(2))
    result.append(obj.insert(2))
    result.append(obj.getRandom())
    result.append(obj.remove(1))
    result.append(obj.insert(2))
    result.append(obj.getRandom())
    print(result)

if __name__ == "__main__":

    test_case_1()
