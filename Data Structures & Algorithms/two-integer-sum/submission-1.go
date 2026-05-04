func twoSum(nums []int, target int) []int {
    m := make(map[int]int)

    for i, num := range nums {
        remain := target - num

        if j, found := m[remain]; found {
            if j < i {
                return []int{j, i}
            }
            return []int{i, j}
        }

        m[num] = i
    }

    return []int{}
}
