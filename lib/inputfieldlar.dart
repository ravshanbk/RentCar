import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:flutter/material.dart';

class InputField extends StatefulWidget {
  String? title;
  InputField({this.title});

  @override
  _InputFieldState createState() => _InputFieldState();
}

class _InputFieldState extends State<InputField> {
   String _inputdanKelganValue = "Boshlangich value";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title!),
        ),
        body: a(),);
  }


//##############################################################
Widget c() {
  return Form(
    child: Padding(
      padding: EdgeInsets.all(10.0),
      child: Column(
        children: [
          //EMAIL
          TextFormField(
            keyboardType: TextInputType.emailAddress,
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: "Emailingiz...",
              labelText: "Email",
              labelStyle: TextStyle(color: Colors.black),
              focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(
                  color: Colors.black,
                ),
              ),
            ),
          ),
          SizedBox(
            height: 45.0,
          ),
          TextFormField(
            obscureText: true,
            keyboardType: TextInputType.visiblePassword,
            decoration: InputDecoration(
              border: OutlineInputBorder(),
              hintText: "Parolingiz...",
              labelText: "Parol",
              labelStyle: TextStyle(color: Colors.black),
              focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(
                  color: Colors.black,
                ),
              ),
            ),
          ),
          SizedBox(
            height: 45.0,
          ),
          ElevatedButton(
            onPressed: () {
              AwesomeDialog(
                context: context,
                dialogType: DialogType.QUESTION,
                animType: AnimType.TOPSLIDE,
                title: "Dialof Title",
                desc: "Dialog description here......",
                btnOkOnPress: () {},
              )..show();
            },
            child: Text("Submit"),
          ),
        ],
      ),
    ),
  );
}

//###############################################################
Widget b() {
  return ListView(
    children: [
      Padding(
        padding: EdgeInsets.all(5.0),
        child: TextField(
          keyboardType: TextInputType.text,
          autofocus: true,
          maxLines: 4,
          maxLength: 40,
          cursorColor: Colors.redAccent,
          onChanged: (v) {
            setState(() {
              _inputdanKelganValue = v;
            });
          },
          onSubmitted: (v) {
            print("Submit Qilindi $v");
          },
          decoration: InputDecoration(
            border: OutlineInputBorder(),
            hintText: "Izohni shu yerda kiriting...",
            labelText: "Label text",
            icon: IconButton(
              onPressed: () {},
              icon: Icon(Icons.add),
            ),
            prefixIcon: IconButton(
              onPressed: () {},
              icon: Icon(Icons.delete),
            ),
            suffixIcon: IconButton(
              onPressed: () {},
              icon: Icon(Icons.send),
            ),
          ),
        ),
      ),
      Container(
        height: 200.0,
        color: Colors.grey,
        child: Center(
          child: Text(
            _inputdanKelganValue,
            style: TextStyle(
              color: Colors.white,
              fontSize: 33.0,
            ),
          ),
        ),
      )
    ],
  );
}

//#########3###################################################

Widget a() {
  return SingleChildScrollView(
    child: Form(
      child: Padding(
        padding: EdgeInsets.all(15.0),
        child: Column(
          children: [
            TextFormField(
              // keyboardType: TextInputType.number,
              maxLength: 100,
              cursorColor: Colors.red,
              obscureText: false,
              initialValue: "parolni kiriting>>>",
              decoration: InputDecoration(
                hintText: "Email . . .",
                border: OutlineInputBorder(
                  borderSide: BorderSide(
                    color: Colors.green,
                  ),
                  borderRadius: BorderRadius.circular(50.0),
                ),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(50.0),
                  borderSide: BorderSide(
                    color: Colors.cyan,
                  ),
                ),
                filled: true,
                fillColor: Colors.green,
                labelText: "Email",
              ),
            )
          ],
        ),
      ),
    ),
  );
}
}
