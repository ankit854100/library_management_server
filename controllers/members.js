export const memberList = [
    {id: 1, name: "Navles Abbey", email: "AusteJane@gmail.com", number: 8264662896},
    {id: 2, name: "Navles Abbey", email: "Austaaaaane@gmail.com", number: 8264662896},
    {id: 3, name: "Navles Abbey", email: "Ausaaaaxxxxxane@gmail.com", number: 8264662896},
    {id: 4, name: "Ankit Anand", email: "ankit@gmail.com", number: 1010100101},
    {id: 5, name: "Aman", email: "Aman@gmail.com", number: 1010100101},
    {id: 6, name: "Karunesh", email: "Karunesh@gmail.com", number: 1010100101},
    {id: 7, name: "Patil", email: "Patil@gmail.com", number: 1010100101},
    {id: 8, name: "Prakash", email: "Prakash@gmail.com", number: 1010100101},
    {id: 9, name: "Madhu", email: "Madhu@gmail.com", number: 1010100101},
    {id: 10, name: "Manohar", email: "Manohar@gmail.com", number: 1010100101},
    {id: 11, name: "Manohar", email: "Manohar@gmail.com", number: 1010100101},
    {id: 12, name: "Shristi", email: "Shristi@gmail.com", number: 1010100101},
    {id: 13, name: "Parmeshwar", email: "Parmeshwar@gmail.com", number: 1010100101},
    {id: 14, name: "Varun", email: "Varun@gmail.com", number: 1010100101},
]

export const getAllMembers = (req, res) => {
    try {
        res.status(200).json(memberList);
    } catch (error) {
        console.log(error);
    }
}

export const addUser = (req, res) => {
    try {
        const data = req.body;
        memberList.push({id: data.id, name: data.name, email: data.email, number: data.number});
        res.status(200).json(memberList);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = (req, res) => {
    try {
        const {id:_id} = req.params;
        const data = req.body;

        for(let i in memberList){
            if(memberList[i].id === id){
                memberList[i].name = data.name;
                memberList[i].email = data.email;
                memberList[i].number = data.number;
            }
        }

        res.status(200).json(memberList);
    } catch (error) {
        console.log(error);
    }
}

export const deleteuser = (req, res) => {
    const {email} = req.params;
    const newArray = memberList.filter((item) => item.email !== email);
    memberList.length = 0;
    for(let i in newArray){
        memberList.push(newArray[i]);
    }
    // console.log(memberList);
    try {
        res.json(memberList);  
    } catch (error) {
        console.log(error);
    }
}

export function paginatedResult(model){
    return (req, res, next) => {
        console.log(model);
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        const startIndex = ( page - 1 ) * limit;
        const endIndex = page * limit;

        const results = {};

        if(endIndex < model.length){
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if(startIndex > 1){
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.results = model.slice(startIndex, endIndex);
        res.paginatedResult = results;
        next();
    }
}