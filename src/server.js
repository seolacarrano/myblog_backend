import express, { response } from 'express';

let projectsInfo = [{
    name: 'learn-react',
    upvotes: 0,
}, {
    name: 'learn-node',
    upvotes: 0,
}, {
    name: 'mongodb',
    upvotes: 0,
}]

const app = express();
app.use(express.json());

app.put('/api/project/:name/upvote', (req, res) => {
    const { name } = req.params;
    const project = projectsInfo.find( a => a.name === name);
    if (project) {
        project.upvotes += 1;
        res.send(`The ${name} project now has ${project.upvotes} upvotes`)
    } else {
        res.send('That project does not exist');
    } 
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});


