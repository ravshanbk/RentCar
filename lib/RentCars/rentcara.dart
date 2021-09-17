import 'package:dars16/RentCars/rentcarb.dart';
import 'package:flutter/material.dart';

class RentCarA extends StatelessWidget {
  GlobalKey _formKey = GlobalKey<FormState>();
  var _firstNameController = TextEditingController();
  var _lastNameController = TextEditingController();
  var _userNameController = TextEditingController();
  var _dateOfBirthController = TextEditingController();
  var _emailController = TextEditingController();

  @override
  Widget build(BuildContext ctx) {
    Size _size = MediaQuery.of(ctx).size;
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: Column(
          children: [
            SizedBox(
              height: 50.0,
            ),
            Container(
              // color: Colors.red,
              height: _size.height * 0.05,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  SizedBox(
                    width: _size.width * 0.33,
                  ),
                  Icon(
                    Icons.account_circle_outlined,
                    color: Colors.blue[500],
                    size: 40.0,
                  ),
                  Icon(
                    Icons.vpn_key,
                    color: Colors.blue[500],
                    size: 40.0,
                  ),
                  Icon(
                    Icons.star_border,
                    color: Colors.blue[500],
                    size: 40.0,
                  ),
                  Icon(
                    Icons.car_rental,
                    color: Colors.blue[500],
                    size: 40.0,
                  ),
                ],
              ),
            ),
            SizedBox(
              height: _size.height * 0.02,
            ),
            Text(
              "Creat account",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                color: Colors.black,
                fontSize: 24.0,
              ),
            ),
            Container(
              alignment: Alignment(0.4, -9.5),
              height: 50.0,
              child: Container(
                alignment: Alignment.center,
                height: 50.0,
                width: 50.0,
                decoration: BoxDecoration(
                  color: Colors.red,
                  borderRadius: BorderRadius.circular(45.0),
                ),
                child: Text(
                  "+",
                  style: TextStyle(
                    fontSize: 40.0,
                  ),
                ),
              ),
            ),
            Container(
              //color: Colors.green,
              height: _size.height * 0.2,
              width: _size.width * 1.0,
              child: CircleAvatar(
                backgroundColor: Colors.white,
                // radius: 50.0,
                child: Icon(
                  Icons.person,
                  color: Colors.blue[300],
                  size: 120.0,
                ),
              ),
            ),
            Container(
              width: _size.width * 0.9,
              child: Form(
                key: _formKey,
                child: Column(
                  children: [
                    TextFormField(
                      validator: (v) {},
                      controller: _firstNameController,
                      keyboardType: TextInputType.multiline,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        labelText: "First Name",
                        hintText: "First name",
                      ),
                      onChanged: (v) {},
                    ),
                    SizedBox(
                      height: 5.0,
                    ),
                    TextFormField(
                      validator: (v) {},
                      controller: _lastNameController,
                      keyboardType: TextInputType.multiline,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        labelText: "Last Name",
                        hintText: "Last name...",
                      ),
                      onChanged: (v) {},
                    ),
                    SizedBox(
                      height: 5.0,
                    ),
                    TextFormField(
                      validator: (v) {},
                      controller: _userNameController,
                      keyboardType: TextInputType.multiline,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        labelText: "User Name",
                        hintText: "User Name...",
                      ),
                      onChanged: (v) {},
                    ),
                    SizedBox(
                      height: 5.0,
                    ),
                    TextFormField(
                      validator: (v) {},
                      controller: _dateOfBirthController,
                      keyboardType: TextInputType.multiline,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        labelText: "Date Of Birth",
                        hintText: "Date Of Birth...",
                      ),
                      onChanged: (v) {},
                    ),
                    SizedBox(
                      height: 5.0,
                    ),
                    TextFormField(
                      validator: (v) {},
                      controller: _emailController,
                      keyboardType: TextInputType.multiline,
                      textCapitalization: TextCapitalization.sentences,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                        labelText: "Email",
                        hintText: "Email...",
                      ),
                      onChanged: (v) {},
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: 5.0,
            ),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                  fixedSize: Size(
                    _size.width * 1.0,
                    _size.height * 0.075,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                      20.0,
                    ),
                  )),
              child: Text(
                "Next Step",
                style: TextStyle(
                  fontSize: 18.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                Navigator.pushReplacement(
                  ctx,
                  MaterialPageRoute(
                    builder: (ctx) => RentCarB(),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}
