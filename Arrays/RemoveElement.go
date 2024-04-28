func removeElement(nums []int, val int) int {
    start := 0
    end := len(nums) - 1
    count := 0
    for start <= end {
        if nums[start] == val {
            count++
            x := nums[start]
            nums[start] = nums[end]
            nums[end] = x
            end--
        } else {
            start++
        }
    } 
    return len(nums)-count
}
