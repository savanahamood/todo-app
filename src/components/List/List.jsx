import React from 'react';
import './list.scss';

const List = ({ items, toggleComplete }) => {
    return (
        <>
            {/* <div class="card-container">
                {items.map(item => (
                    <div class="card" key={item.id}>
                        <div class="card-image"></div>
                        <div class="card-info">
                            <div class="card-title">{item.assignee}</div>
                            <div class="card-detail">{item.text}</div>
                        </div>
                        <div class="card-social">
                            <p><small>Difficulty: {item.difficulty}</small></p>
                            <div className="complete" onClick={() => toggleComplete(item.id)}>
                                Complete: {item.complete.toString()}
                            </div>
                        </div>
                    </div>
                ))}

            </div> */}
            <div className="contt">


            {items.map(item => (
                <div class="container mt-2" key={item.id}>
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="card card-block">
                                <h4 class="card-title text-right"><i class="material-icons">Assigned to: {item.assignee}</i></h4>
                                <img src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png" alt="Photo of sunset" />
                                <h5 class="card-title mt-3 mb-3">TODO LIST</h5>
                                <p class="card-text">{item.text}</p>
                                <p className="complete"><small>Difficulty: {item.difficulty}</small></p>
                                <div className="complete1" onClick={() => toggleComplete(item.id)}>
                                    Complete: {item.complete.toString()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}

            </div>


            {/* <div>
                {items.map(item => (
                    <div className="list-item" key={item.id}>
                        <p>{item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <div className="complete" onClick={() => toggleComplete(item.id)}>
                            Complete: {item.complete.toString()}
                        </div>
                        <hr />
                    </div>
                ))}
            </div> */}
        </>
    );
};
export default List;






