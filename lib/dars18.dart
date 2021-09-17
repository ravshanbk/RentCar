import 'package:dars16/blankpage.dart';
import 'package:flutter/material.dart';

class Dars18 extends StatefulWidget {
  @override
  _Dars18State createState() => _Dars18State();
}

class _Dars18State extends State<Dars18> {
  var _formKey = GlobalKey<FormState>();
  var _usernameController = TextEditingController();
  var _emailController = TextEditingController();
  var _passwordController = TextEditingController();

  @override
  Widget build(BuildContext ctx) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Text("Login Form !"),
      ),
      body: Center(
        child: Column(
          children: [
            Container(
              child: Form(
                key: _formKey,
                child: Padding(
                  padding: EdgeInsets.all(10.0),
                  child: Column(
                    children: [
                      //For USERNAME
                      TextFormField(
                        validator: (text) {
                          if (text!.length < 4) {
                            return "4 tadan kam belgi kiritmang";
                          }
                        },
                        controller: _usernameController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: "Username",
                        ),
                      ),
                      SizedBox(
                        height: 10.0,
                      ),
                      //For EMAIL
                      TextFormField(
                        validator: (text) {
                          if (text!.length < 4) {
                            return "4 tadan kam belgi kiritmang";
                          }
                        },
                        controller: _emailController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: "Email",
                        ),
                      ),
                      SizedBox(
                        height: 10.0,
                      ),
                      //For PASSWORD
                      TextFormField(
                        validator: (text) {
                          if (text!.length < 4) {
                            return "4 tadan kam belgi kiritmang";
                          }
                        },
                        controller: _passwordController,
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: "Password",
                        ),
                      ),
                      TextFormField(
                        validator: (text) {
                          if (text != _passwordController.text) {
                            return "Password did not match";
                          }
                        },
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: "Retype Password",
                        ),
                      ),
                      SizedBox(
                        height: 10.0,
                      ),
                    ],
                  ),
                ),
              ),
            ),
            Column(
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    primary: Colors.orange,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text("Save"),
                      SizedBox(
                        width: 20.0,
                      ),
                      Icon(Icons.save),
                    ],
                  ),
                  onPressed: () {
                    _saveButton();
                  },
                ),
                ElevatedButton.icon(
                  onPressed: () {
                     _clearButton();
                  },
                  icon: Icon(Icons.save),
                  style:  ElevatedButton.styleFrom(
                    primary: Colors.orange,
                  ),
                  label: Text("Clear"),
                ),
                SizedBox(
                  width: 20.0,
                ),
                Container(
                  height: 200.0,
                  color: Colors.yellow,
                  child: Text(
                    "${_usernameController.text}\n${_emailController.text}\n${_passwordController.text}",
                    style: TextStyle(fontSize: 30.0, color: Colors.black),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  _saveButton() {
    if (RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+").hasMatch(_emailController.text)) {
      Navigator.pushReplacement(
        context, MaterialPageRoute(
          builder: (context)=> BlankPage(_usernameController.text),),
      );
      setState(() {});
    }
  }

  _clearButton() {
    _formKey.currentState!.reset();
  }
}
