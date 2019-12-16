import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import './users.scss';
import {fetchUsers} from '../../store/actions/user.actions';
import DataGrid,{Column} from "devextreme-react/data-grid";

const Users = ({users: {users}, fetchUsers}) => {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);


    return (

        <React.Fragment>
            <h2 className={'content-block'}>Users</h2>
            <DataGrid
                dataSource={users}

                showBorders={true}
            >
                <Column
                    dataField="id"
                    dataType="int"
                />
                <Column
                    dataField="name"
                    dataType="string"
                />
                <Column
                    dataField="username"
                    dataType="string"
                />
                <Column
                    dataField="phone"
                    dataType="string"
                />
                <Column
                    dataField="website"
                    dataType="string"
                />

            </DataGrid>
        </React.Fragment>
    );
};


const mapStateToProps = ({users}) => ({users});
export default connect(
    mapStateToProps,
    {fetchUsers},
)(Users);
