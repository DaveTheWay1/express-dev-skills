const skills = [
    {id: 0, type:'soft skill', ability: 'leadership'},
    {id: 1, type:'technical skill', ability: 'javascript'},
    {id: 2, type:'soft skill', ability:'communicate'},
    {id: 3, type:'technical skill', ability:'python'}
]

module.exports = {
    getAll,
    getOne
}

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}
