const skills = [
    {id: 0, type:'Soft Skill', ability: 'Leadership'},
    {id: 1, type:'Technical Skill', ability: 'Javascript'},
    {id: 2, type:'Soft Skill', ability:'Communication'},
    {id: 3, type:'Technical Skill', ability:'Python'}
]

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create,
    update
}

function getAll(){
    return skills
}

function getOne(id){
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}

function create(skill){
    skill.id = skills.length;
    skills.push(skill);
}

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.find(skill => skill.idx === id);
    skills.splice(idx,1);
}

function update(id, updatedSkill){
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

