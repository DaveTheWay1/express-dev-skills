const skills = [
    {id: 0, type:'soft skill', ability: 'leadership'},
    {id: 1, type:'technical skill', ability: 'javascript'},
    {id: 2, type:'soft skill', ability:'communicate'},
    {id: 3, type:'technical skill', ability:'python'}
]

module.export = {
    skills:getAll(),
    skill:getOne(),
}

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    skills.find((skill) => skill.id === id);
}
