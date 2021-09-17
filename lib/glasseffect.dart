import 'dart:ui';

import "package:flutter/material.dart";

class GlassEffect extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    double contrwidth = size.width * 1.0;
    return Scaffold(
      body: Container(
        alignment: Alignment.center,
        decoration: BoxDecoration(
          // borderRadius: BorderRadius.circular(25.0),
          image: DecorationImage(
            fit: BoxFit.cover,
            image: AssetImage("assets/images/im.jpeg"),
          ),
        ),
        child: FrostedGlassBox(
          symetricTop: true,
          en: contrwidth,
          boy: contrwidth,
          radiuss: 0.7,
          bola: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  "",
                  style: TextStyle(
                      color: Colors.black, fontWeight: FontWeight.bold),
                ),
                Divider(
                  color: Colors.black,
                  indent: 40,
                  endIndent: 40,
                ),
                Text(
                  "",
                  style: TextStyle(
                    color: Colors.black,
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

//#####################################################33

class FrostedGlassBox extends StatelessWidget {
   double boy, en;
   Widget bola;
   double radiuss;
   bool symetricTop;


   FrostedGlassBox(
      {required this.boy,
      required this.en,
      required this.bola,
      required this.radiuss,
      required this.symetricTop});
  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: radiusss(),
      child: Container(
        width: en,
        height: boy,
        child: Stack(
          children: [
            BackdropFilter(
              filter: ImageFilter.blur(
                sigmaX: 0.5,
                sigmaY: 1.0,
              ),
              child: Container(
                width: en,
                height: boy,
                child: Text("  "),
              ),
            ),
            Opacity(
              opacity: 1.0,
              // child: Image.asset(
              //   "assets/images/frostedglass.jpeg",
              //   width: en,
              //   height: boy,
              //   fit: BoxFit.cover,
              // ),
            ),
            Container(
              decoration: BoxDecoration(
                boxShadow: [
                  BoxShadow(
                      color: Colors.black.withOpacity(0.5), blurRadius: 50.0),
                ],
                borderRadius:
                    BorderRadius.vertical(top: Radius.circular(radiuss)),
                //  border: Border.all(color: Colors.red.withOpacity(0.3),width: 1.0),
                gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.brown.withOpacity(0.6),
                      Colors.brown.withOpacity(0.2),
                    ],
                    stops: [
                      0.5,
                      1.1
                    ]),
              ),
              child: bola,
            ),
          ],
        ),
      ),
    );
  }

  BorderRadius radiusss(){
    if(this.symetricTop){
    return BorderRadius.vertical(top: Radius.circular(radiuss));
    }else{ 
      return BorderRadius.vertical(bottom: Radius.circular(radiuss),); 
    }
  }
}
