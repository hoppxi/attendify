import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:open_file/open_file.dart';
import 'package:sphone/screens/StudentProfilePage.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:url_launcher/url_launcher_string.dart';

class DropDownForTemplates extends StatefulWidget {
  final List children;
  final String title;
  final BuildContext context;
  final Color buttonColor;
  final Color titleColor;
  DropDownForTemplates({
    super.key,
    required this.children,
    required this.title,
    required this.context,
    required this.buttonColor,
    required this.titleColor,
  });

  @override
  State<DropDownForTemplates> createState() => _DropDownForTemplatesState();
}

class _DropDownForTemplatesState extends State<DropDownForTemplates> {
  bool showChildren = false;
  Column getChildren(
      bool showChildren, List children, String title, BuildContext context) {
    if (showChildren) {
      return Column(
          children: children.map((child) {
        return Center(
            child: Padding(
          padding: const EdgeInsets.all(9),
          child: Container(
            width: 500,
            child: ElevatedButton(
                style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all(Colors.amber)),
                onPressed: () {},
                child: ListTile(
                  trailing: Container(
                    width: 75,
                    child: Row(children: [
                      ElevatedButton(
                        style: ButtonStyle(
                            backgroundColor: MaterialStateProperty.all(
                                const Color.fromARGB(255, 27, 255, 34))),
                        onPressed: () {
                          String father_phone_number =
                              child["father_phone_number"];
                          launchUrlString("tel: //$father_phone_number");
                          showDialog(
                              context: context,
                              builder: (build) {
                                return AlertDialog();
                              });
                        },
                        child: Icon(
                          Icons.phone,
                          color: Colors.white,
                        ),
                      )
                    ]),
                  ),
                  onTap: () {
                    Navigator.push(context, MaterialPageRoute(builder: (build) {
                      return StudentProfilePage(data: child);
                    }));
                  },
                  title: Text("${child["first_name"]} ${child["father_name"]}"),
                )),
          ),
        ));
      }).toList());
    } else {
      return Column();
    }
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: EdgeInsets.all(10),
          width: screenWidth - 10,
          child: ElevatedButton(
            style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(widget.buttonColor)),
            onPressed: () {
              setState(() {
                showChildren = !showChildren;
              });
            },
            child: ListTile(
              title: Text(
                widget.title,
                style: TextStyle(color: widget.titleColor),
              ),
            ),
          ),
        ),
        getChildren(showChildren, widget.children, widget.title, context),
      ],
    );
  }
}
