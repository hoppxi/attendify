import "package:flutter/material.dart";

class StudentProfilePage extends StatefulWidget {
  final Map data;
  const StudentProfilePage({super.key, required this.data});

  @override
  State<StudentProfilePage> createState() => _StudentProfilePageState();
}

class _StudentProfilePageState extends State<StudentProfilePage> {
  @override
  Widget build(BuildContext context) {
    String firstName = widget.data["first_name"];
    String fatherName = widget.data["father_name"];
    String grandFatherName = widget.data["grand_father_name"];
    String phoneNumber1 = widget.data["phone_number_1"];
    String phoneNumber2 = widget.data["phone_number_2"];
    String gender = widget.data["gender"];
    String registrationDate = widget.data["registration_date"];
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Column(
          children: [
            const SizedBox(height: 200),
            Text(
              "First Name: " + firstName,
            )
          ],
        ),
      ),
    );
  }
}
