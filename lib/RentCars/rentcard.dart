import 'package:flutter/material.dart';

class RentCarD extends StatelessWidget {
  int index = 1;
  GlobalKey _formKey = GlobalKey<FormState>();
  var _creditCardController = TextEditingController();

  @override
  Widget build(BuildContext ctx) {
    Size _size = MediaQuery.of(ctx).size;
    return Scaffold(
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Form(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: 55.0,),
                Container(
                  margin: EdgeInsets.only(left: 0.0),
                  height: _size.height * 0.2,
                  width: _size.width * 0.9,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: AssetImage(
                        "assets/images/rentcar$index.jpeg",
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
                Text(
                  """\nWhere would you like to take the vehicle?""",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontStyle: FontStyle.italic,
                    fontSize: 25.0,
                    //   fontWeight: FontWeight.bold,
                    color: Colors.blue,
                  ),
                ),
                
                Form(
                  key: _formKey,
                  child: Column(
                    children: [
                      SizedBox(height: 25.0,),
                      TextFormField(
                        maxLines: 4,
                        validator: (v) {},
                        controller: _creditCardController,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(20.0)),
                            hintText: "Address...",
                            labelStyle: TextStyle(
                              fontSize: 28.0,
                            ),
                            labelText: "Address",
                            ),
                      ),
                      SizedBox(
                        height: 25.0,
                      ),
                     
                      ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          fixedSize: Size(200.0,55.0)
                        ),
                  onPressed: () {},
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "Send",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 30.0,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Icon(
                        Icons.send,
                        size: 30.0,
                        color: Colors.white,
                      ),
                    ],
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
