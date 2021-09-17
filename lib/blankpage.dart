import 'package:flutter/material.dart';

class BlankPage extends StatelessWidget{
  String v;
  BlankPage(this.v);
  @override
  Widget build(BuildContext ctx){
    return Scaffold(
      primary: true,
      backgroundColor: Colors.deepOrange,
      body: Center(
        child: Container(child: Text("$v"),),
      ),
    );
  }
}