import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
{
  id: 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'test1',
  age: '20',
  job: 'Marketer',
},
{
  id: 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'test1',
  age: '28',
  job: 'Customs Specialist',
},
{
  id: 3,
  image: 'https://placeimg.com/64/64/3',
  name: 'test1',
  age: '30',
  job: 'Programmer',
},
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(obj => {
              return (
                <Customer
                  key={obj.id}
                  id={obj.id}
                  image={obj.image}
                  name={obj.name}
                  age={obj.age}
                  job={obj.job} 
                />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
