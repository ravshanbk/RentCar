import 'package:dars16/RentCars/rentcara.dart';
import 'package:dars16/dars18.dart';
import 'package:dars16/inputfieldlar.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: RentCarA()
      //Dars18() 
      //InputField(title:"Input Fields"),
            //EmailParol(),
    );
  }
}

