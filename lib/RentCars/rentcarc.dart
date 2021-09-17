import 'package:awesome_dialog/awesome_dialog.dart';
import 'package:dars16/RentCars/rentcarb.dart';
import 'package:flutter/material.dart';

class RentCarC extends StatefulWidget {
  
  int index;

  RentCarC(this.index);

  @override
  _RentCarCState createState() => _RentCarCState();
}

class _RentCarCState extends State<RentCarC> {
  final _formKey = GlobalKey<FormState>();
  

  var _dayCountController = TextEditingController();

  var _creditCardController = TextEditingController();

  @override
  Widget build(BuildContext ctx) {
    num bill= 0;
    
    Size _size = MediaQuery.of(ctx).size;
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          "Bill Page",
          style: TextStyle(
            fontFamily: "",
            fontStyle: FontStyle.italic,
            color: Colors.white,
            fontSize: 35.0,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Form(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: _size.height * 0.17,
                  child: Row(
                    children: [
                      Expanded(
                        child: Container(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                "Bill:",
                                style: TextStyle(
                                  fontSize: 25.0,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.blue,
                                      fontStyle: FontStyle.italic

                                ),
                              ),
                              Row(
                                children: [
                                  Text(
                                    "\$",
                                    style: TextStyle(
                                      fontSize: 25,
                                      color: Colors.blue,
                                      fontStyle: FontStyle.italic
                                    ),
                                  ),
                                  Text(
                                    "$bill",
                                    style: TextStyle(
                                      color: Colors.deepOrange,
                                      fontSize: 25.0,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ],
                              )
                            ],
                          ),
                        ),
                      ),
                      Expanded(
                        child: Container(
                          height: _size.height * 0.17,
                          width: _size.width * 0.5,
                          decoration: BoxDecoration(
                            image: DecorationImage(
                              image: AssetImage(
                                "assets/images/rentcar${widget.index}.jpeg",
                              ),
                              fit: BoxFit.cover,
                            ),
                            color: Colors.yellow,
                            borderRadius: BorderRadius.only(
                              topRight: Radius.circular(45.0),
                              bottomLeft: Radius.circular(45.0),
                              topLeft: Radius.circular(10.0),
                              bottomRight: Radius.circular(10.0),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Text(
                  "Your selected car is:",
                  style: TextStyle(
                    fontStyle: FontStyle.italic,
                    fontSize: 20.0,
                    //   fontWeight: FontWeight.bold,
                    color: Colors.blue,
                  ),
                ),
                Text(
                  "${RentCarB.carNames[widget.index]}",
                  style: TextStyle(
                    fontSize: 30.0,
                    fontWeight: FontWeight.bold,
                    color: Colors.deepOrange,
                  ),
                ),
                Container(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        children: [
                          Text(
                            "the daily rental price:",
                            style: TextStyle(
                              fontStyle: FontStyle.italic,
                              fontSize: 20.0,
                              // fontWeight: FontWeight.bold,
                              color: Colors.blue,
                            ),
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Text(
                                "\$${RentCarB.carPrices[widget.index]}",
                                style: TextStyle(
                                  fontSize: 30.0,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.deepOrange,
                                ),
                              ),
                              Text(
                                ".per day",
                                style: TextStyle(
                                  fontStyle: FontStyle.italic,
                                  fontSize: 20.0,
                                  // fontWeight: FontWeight.bold,
                                  color: Colors.blue,
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                Form(
                  key: _formKey,
                  child: Column(
                    children: [
                      SizedBox(height: 10.0,),
                      TextFormField(
                        onChanged: (v) {
                          bill = (int.parse(v)) * RentCarB.carPrices[widget.index];
                          setState(() {
                          });
                        },
                        keyboardType: TextInputType.number,
                        validator: (v) {
                          if(v!.length<1){
                            return "Required";
                          }
                        },
                        controller: _dayCountController,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20.0)),
                            hintText: "How many days do you want rent ...",
                            labelStyle: TextStyle(
                              fontSize: 18.0,
                            ),
                            labelText: "How many days do you want rent"),
                      ),
                      SizedBox(
                        height: 5.0,
                      ),
                      TextFormField(
                        keyboardType: TextInputType.number,
                        validator: (v) {
                          if(v!.length==0){
                            return "Required";
                          }else if(v.length < 20){
                            return "Incorrect Card Number";
                          }else if(v.length > 20){
                            return "Incorrect Card Number";
                          }
                        },
                        controller: _creditCardController,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20.0)),
                            hintText: "Credit Card Number...",
                            labelText: "Credit Card Number"),
                      ),
                      SizedBox(
                        height: 5.0,
                      ),
                      Container(
                        width: 170.0,
                        height: 50.0,
                        child: ElevatedButton(
                          onPressed: () {
                           if( _formKey.currentState!.validate()){
                              AwesomeDialog(
                                context: context,
                                dialogType: DialogType.SUCCES,
                                animType: AnimType.TOPSLIDE,
                                title: "Success",
                                desc: "Will be delivered within 10 minuts",
                                btnOkOnPress: () {},
                                )..show();
                           }else {
                             AwesomeDialog(
                                context: context,
                                dialogType: DialogType.INFO_REVERSED,
                                animType: AnimType.TOPSLIDE,
                                title: "Somthing went WRONG",
                                desc: "Retry . . .",
                                btnOkOnPress: () {},
                                )..show();

                           }
                          },
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                "Submit",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 25.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              Icon(
                                Icons.arrow_forward,
                                size: 30.0,
                                color: Colors.white,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
