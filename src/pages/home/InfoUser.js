import React, { Component } from 'react';
import axios from 'axios'
class InforUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            user : {},
            data: {},
            updatePass : false,
            msgUpdatePass : '',
            old_password: '',
            new_password: ''
        }
    }

    set_old_password(e){
        e.preventDefault();
        this.setState({
            old_password : e.target.value
        })
    }
    set_new_password(e){
        e.preventDefault();
        this.setState({
            new_password : e.target.value
        })
    }



    isChange = (e) =>{
        console.log(e.target.name)
        console.log(e.target.value)
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            data :{[name] : value}
        })
    }
    updateUser(id){
        axios({
            method: 'PUT',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/users/'+`${id}`,
            data: this.state.data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))['token']
            }
          }).then( res =>{
              console.log(res.status);
              console.log(res);
            this.setState({
                isRed : true
            })
          })
          console.log(id);
    }
    updatePass(id){
        console.log(this.state);
        axios({
            method: 'PATCH',
            url: 'https://shop-laptop-2020.herokuapp.com/v1/users/'+`${id}` +'/password',
            data: this.state,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': JSON.parse(localStorage.getItem('token'))['token']
            }
          }).then( res =>{
              console.log(res);
              if(res.status == 200){
                this.setState({
                    isRed : true,
                })
                alert('Thay đổi mật khẩu thành công')
              }
              else{
                this.setState({
                    isRed : true,
                    msgUpdatePass: 'Cập nhật mật khẩu thất bại'
                })
              }
          })
          console.log(id);
    }
    componentWillMount(){
        console.log(JSON.parse(localStorage.getItem('token')).user.id);
        if(localStorage.getItem('token') !== null){
            const id=JSON.parse(localStorage.getItem('token')).user.id
            axios.get(`https://shop-laptop-2020.herokuapp.com/v1/users/${id}`)
            .then(res => {
                console.log(res.data.user);
              this.setState({
                  user: res.data.user
              })
              console.log(res.data.user);
            })
            .catch(error => console.log(error));
          }
            
        }
        setTrangThai(e){
            e.preventDefault();
            this.setState({
                updatePass : true
            })
        }
        kiemTraHienThi(){
            if(this.state.updatePass === false){
                return(
                <div className="backgr">
                    <div className="formtt">
                    <div className="card border-primary ">
                        <div className="card-header text-center">Thông tin tài khoản</div>
                        <div className="card-body carbd">
                        <div classname="btn-group mb-4">
                            <label classname="label_input lbInforUser" htmlfor>Tên :</label>
                            <input type="text" onChange={(e)=>this.isChange(e)} classname="form-control nhapvao" name="name" defaultValue={this.state.user.name}  />
                        </div>
                        <div classname="btn-group mb-4">
                            <label classname="label_input lbInforUser" htmlfor>Số điện thoại :</label>
                            <input type="text" onChange={(e)=>this.isChange(e)} classname="form-control nhapvao" name="phone" defaultValue={this.state.user.phone}  />
                        </div>
                        <div classname="btn-group mb-4">
                            <label classname="label_input lbInforUser" htmlfor>Email :</label>
                            <input type="text" onChange={(e)=>this.isChange(e)} classname="form-control nhapvao" name="email" defaultValue={this.state.user.email}  />
                        </div>
                        <div classname="btn-group mb-4">
                            <label classname="label_input lbInforUser" htmlfor>Địa chỉ :</label>
                            <input type="textarea" onChange={(e)=>this.isChange(e)} classname="form-control nhapvao" name="address" defaultValue={this.state.user.address}  />
                        </div>
                        <div classname="btn-group mb-4">
                            <label classname="label_input lbInforUser" htmlfor>Password :</label>
                            <input type="password" classname="form-control nhapvao mkne" defaultValue="xxxxxx" disabled/>
                            <a href="/" className="updatepass" onClick={(e)=>this.setTrangThai(e)}>Thay đổi</a>
                        </div>
                        <div className="btn btn-danger cn" onClick={()=>this.updateUser(this.state.user.id)}>Cập nhật</div>
                        </div>
                    </div>
                    </div>
                </div>
                )
            }
            else return(
                <div className="backgr">
                    <div className="formdn">
                    <div className="card border-primary ">
                        <div className="card-header text-center">Thay đổi mật khẩu</div>
                        <div className="card-body ">
                        <input onChange={(e)=>this.set_old_password(e)} type="password" className="form-control mb-4" name="old_password" placeholder="Mật khẩu cũ" />
                        <input onChange={(e)=>this.set_new_password(e)} type="password" className="form-control mb-4" name="new_password" placeholder="Mật khẩu mới" />
                        <input onChange={(e)=>this.isChange(e)} type="password" className="form-control " name="confim_password" placeholder="Nhập lại mật khẩu mới" />
                        </div>
                        <div className="btn btn-block btn-danger dn mb-2" onClick={()=>this.updatePass(this.state.user.id)}>Xác nhận</div>
                    </div>
                    </div>
                </div>
            )
        }
    render() {
        return (
            <div className="wrapper">
                <div className="upup">
                    <a href="/" className="trai">
                    <i className="fa fa-home" />
                    <span>BKLaptop</span>
                    </a>
                    <span className="dangnhap">Thông tin tài khoản</span>
                    
                    {this.kiemTraHienThi()}
                </div>
                
            </div>

        );
    }
}

export default InforUser;