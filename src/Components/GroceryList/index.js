import React from 'react';
import './styles.scss';

class GroceryList extends React.Component {
    render() {
        return (
            <div className="grocery-list">
                <h2>Grocery List</h2>
                <div className="grocery-list-container">
                    <input type="checkbox" value="apple" />
                    <label>Apples</label>
                    <br />
                    <input type="checkbox" value="toilet-paper" />
                    <label>Toilet Paper</label>
                    <br />
                    <input type="checkbox" value="oranges" />
                    <label>Oranges</label>
                    <br />
                    <input type="checkbox" value="banaba" />
                    <label>Banana</label>
                    <br />
                    <input type="checkbox" value="eggs" />
                    <label>Eggs</label>
                </div>
            </div>
        );  
    }
}

export default GroceryList;