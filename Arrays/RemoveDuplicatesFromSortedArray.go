func removeDuplicates(nums []int) int {
    k := 0
    for i := 1; i < len(nums); i++ {
        if nums[i] != nums[k] {
            k++
            nums[k] = nums[i]
        }
    }
    return k+1
}

func removeDuplicates2(nums []int) int {
    for i := 1; i < len(nums); i++ {
        if nums[i-1] >= nums[i] {
            // find next unique number
            j := i
            for j < len(nums) && nums[j] <= nums[i-1] {
                j++
            }

            if j < len(nums) {
                nums[i] = nums[j]
            } else {
                // if j reached the end, we have exhausted the unique numbers after position i
                return i
            }
        }
    }
    return len(nums)
}

