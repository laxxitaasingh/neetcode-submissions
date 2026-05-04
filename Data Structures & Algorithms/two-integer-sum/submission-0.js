class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i=0;i<nums.length;i++){
            let remain = target-nums[i]
            if(map.has(remain)){
               let j = map.get(remain)
                return  j<i ? [j,i]:[i,j]
            }
             map.set(nums[i], i);
        }
        return []
    }
}
