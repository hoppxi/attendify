import "package:flutter/material.dart";
import 'package:sphone/screens/DropDownForAttendance.dart';

class AttendancePage extends StatefulWidget {
  Map attendanceData = {};
  AttendancePage({super.key, required this.attendanceData});

  @override
  State<AttendancePage> createState() => _AttendancePageState();
}

class _AttendancePageState extends State<AttendancePage> {
  @override
  Widget build(BuildContext context) {
    var absent = widget.attendanceData["Absent"];
    var present = widget.attendanceData["Present"];
    return Scaffold(
      body: Column(
        children: [
          const SizedBox(height: 50),
          DropDownForTemplates(
            children: present,
            title: "Present",
            context: context,
            buttonColor: Colors.white,
            titleColor: Colors.black,
          ),
          const SizedBox(height: 20),
          DropDownForTemplates(
            children: absent,
            title: "Absent",
            context: context,
            buttonColor: Colors.red,
            titleColor: Colors.white,
          ),
        ],
      ),
    );
  }
}
