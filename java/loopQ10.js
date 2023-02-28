


let names = ['Ali', 'Ali', 'Rehman', 'Ali', 'Hamza', 'Rehman', 'Waqas', 'Eman']
let duplicates = []
let temp = [...names].sort();
for (let i = 0; i < temp.length; i++) {
    if (temp[i] == temp[i + 1]) {
        if (!duplicates.includes(temp[i])) {
            duplicates.push(temp[i])

        }
    }
}
console.log(duplicates)
