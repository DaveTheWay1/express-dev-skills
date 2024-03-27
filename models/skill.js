const skills = [
    {id: 0, type:'Soft Skill', ability: 'Leadership'},
    {id: 1, type:'Technical Skill', ability: 'Javascript'},
    {id: 2, type:'Soft Skill', ability:'Communication'},
    {id: 3, type:'Technical Skill', ability:'Python'}
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
