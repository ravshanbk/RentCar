import 'package:dars16/RentCars/rentcarc.dart';
import 'package:dars16/glasseffect.dart';
import 'package:flutter/material.dart';

class RentCarB extends StatelessWidget {
  static const List<String> carNames = [
    "Ferrari 458 Sports",
    "Audi A8 CROSSOVER",
    "BMW COUPE",
    "Honda ACCORD"
  ];
  static const List<int> carPrices = [210, 180, 220, 195];
  static const List<String> subIconNames = [
    "Snow Bikes",
    "Helicopters",
    "Scooters",
    "Trucks"
  ];

  @override
  Widget build(BuildContext ctx) {
    Size _size = MediaQuery.of(ctx).size;
    return Scaffold(
      // backgroundColor: Colors.blue[100],
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "Explore",
              style: TextStyle(
                fontSize: 25.0,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
            Container(
              width: _size.height * 0.13,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Icon(
                    Icons.notes,
                    color: Colors.black,
                  ),
                  CircleAvatar(
                    child: Text(" "),
                    backgroundImage: AssetImage(
                      "assets/images/im.jpeg",
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: Container(
        height: _size.height * 0.08,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Icon(
              Icons.explore_outlined,
              size: 40,
              color: Colors.grey[600],
            ),
            Icon(
              Icons.bookmark_border,
              size: 40.0,
              color: Colors.grey[600],
            ),
            Icon(
              Icons.add_circle_outline,
              size: 40.0,
              color: Colors.grey[600],
            ),
            Icon(
              Icons.mark_chat_unread_outlined,
              size: 40.0,
              color: Colors.grey[600],
            ),
            Icon(
              Icons.scatter_plot_outlined,
              size: 40.0,
              color: Colors.grey[600],
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.symmetric(horizontal: 15.0),
              child: TextFormField(
                decoration: InputDecoration(
                  fillColor: Colors.black,
                  hintText: "What transport do you need?",
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(15.0),
                  ),
                  prefixIcon: Icon(
                    Icons.search,
                  ),
                ),
                onChanged: (v) {},
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.black,
                ),
              ),
            ),
            Container(
              height: _size.height * 0.05,
              width: _size.width * 1.0,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: listViewChildrena(),
              ),
            ),
            Divider(
              height: 0.1,
            ),
            Container(
              alignment: Alignment.center,
              height: _size.height * 0.5,
              width: _size.width * 1.0,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemBuilder: (cxt, i) {
                  return _mainResults(ctx,_size, i);
                },
                itemCount: 4,
              ),
            ),
            Container(
              alignment: Alignment.center,
              height: _size.height * 0.25,
              width: _size.width * 1.0,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemBuilder: (cxt, i) {
                  return _secondResults(_size, i);
                },
                itemCount: 4,
              ),
            ),
          ],
        ),
      ),
    );
  }

//##############################################################
//##############################################################
//---MainEsults Funksiyasi-----------------------------------------
  Widget _mainResults(ctx,_size, i) {
    return Container(
      margin: EdgeInsets.all(10.0),
      alignment: Alignment.topCenter,
      height: (_size.height * 0.5) - 10.0,
      width: (_size.width * 1.0) - 40.0,
      decoration: BoxDecoration(
        image: DecorationImage(
            image: AssetImage("assets/images/rentcar$i.jpeg"),
            fit: BoxFit.cover),
        color: Colors.deepOrange,
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          FrostedGlassBox(
            symetricTop: true,
            boy: _size.height * 0.14,
            en: (_size.width * 1.0) - 40.0,
            radiuss: 20.0,
            bola: Container(
              decoration: BoxDecoration(),
              height: _size.height * 0.15,
              width: (_size.width * 1.0) - 40.0,
              child: Row(
                children: [
                  Container(
                    padding: EdgeInsets.only(left: 15.0, top: 15.0),
                    height: _size.height * 0.15,
                    width: _size.width * 0.75,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          carNames[i],
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 29.0,
                          ),
                        ),
                        SizedBox(
                          height: 2.35,
                        ),
                        Text(
                          "2017  -  COMFORT CLASS",
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.normal,
                            fontSize: 16.0,
                          ),
                        ),
                        Container(
                          width: _size.width * 0.35,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: [
                              Icon(Icons.notifications_paused,
                                  color: Colors.grey[500]),
                              Text(
                                "5",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold),
                              ),
                              Icon(Icons.mediation, color: Colors.grey[500]),
                              Text(
                                "4",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold),
                              ),
                              Icon(Icons.business_center,
                                  color: Colors.grey[500]),
                              Text(
                                "3",
                                style: TextStyle(
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold),
                              ),
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                  Container(
                    alignment: Alignment(1.2, -1.0),
                    height: _size.height * 0.15,
                    width: _size.width * 0.148,
                    child: Container(
                        height: 30.0,
                        width: 60.0,
                        decoration: BoxDecoration(
                            color: Colors.yellow[100],
                            borderRadius: BorderRadius.only(
                                bottomLeft: Radius.circular(20.0))),
                        child: Row(
                          children: [
                            Icon(
                              Icons.star,
                              color: Colors.yellow[900],
                              size: 25.0,
                            ),
                            Text(
                              "4.5",
                              style: TextStyle(
                                  color: Colors.yellow[900], fontSize: 18),
                            ),
                          ],
                        )),
                  )
                ],
              ),
            ),
          ),
          FrostedGlassBox(
            symetricTop: false,
            boy: _size.height * 0.10,
            en: (_size.width * 1.0) - 40.0,
            radiuss: 20.0,
            bola: Container(
              padding: EdgeInsets.symmetric(horizontal: 15.0),
              decoration: BoxDecoration(),
              height: _size.height * 0.15,
              width: (_size.width * 1.0) - 40.0,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      primary: Colors.transparent,
                      elevation: 0,
                    ),
                    onPressed: () {},
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "\$${carPrices[i]}",
                          style: TextStyle(
                            color: Colors.grey[500],
                            fontSize: 30.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          " per day",
                          style: TextStyle(
                            color: Colors.grey[500],
                            fontSize: 15.0,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      primary: Colors.grey[500],
                    ),
                    onPressed: () {
                      Navigator.push(
                        ctx,
                        MaterialPageRoute(
                          builder: (ctx) => RentCarC(i),
                        ),
                      );
                    },
                    child: Text(
                      "Book Now",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 20.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

//
//---SecondRsults Funksiyasi-----------------------------------------
  Widget _secondResults(_size, i) {
    return Container(
      margin: EdgeInsets.all(10.0),
      alignment: Alignment(0.0, -0.8),
      height: ((_size.height * 0.5) - 10.0) / 2,
      width: ((_size.width * 1.0) - 40.0) / 2,
      decoration: BoxDecoration(
        image: DecorationImage(
            fit: BoxFit.cover,
            image: AssetImage("images/subrentcar$i.jpeg")),
        color: Colors.deepOrange,
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Text(
        subIconNames[i],
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
          color: Colors.white,
        ),
      ),
    );
  }

//---TextButtonskatta rasm tepasidagi-----------------------------
  List<Widget> listViewChildrena() {
    return [
      Container(
        // color: Colors.red,
        child: TextButton(
          child: Text(
            "Explore",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
      Container(
        //  color: Colors.red,
        child: TextButton(
          child: Text(
            "Cars",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
      Container(
        //   color: Colors.red,
        child: TextButton(
          child: Text(
            "Trucks",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
      Container(
        // color: Colors.red,
        child: TextButton(
          child: Text(
            "Scooters",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
      Container(
        //  color: Colors.red,
        child: TextButton(
          child: Text(
            "Helicopters",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
      Container(
        // color: Colors.red,
        child: TextButton(
          child: Text(
            "Explore",
            style: TextStyle(
              color: Colors.black,
              fontSize: 16.0,
              fontWeight: FontWeight.bold,
            ),
          ),
          onPressed: () {},
        ),
      ),
    ];
  }
}
