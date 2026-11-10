const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const Institute = require('./models/institute/Institute');
const Faculty = require('./models/institute/Faculty');
const Student = require('./models/institute/Student');
const Department = require('./models/institute/Department');

const uri = process.argv[2] || process.env.MONGO_URI;

if (!uri) {
  console.error("❌ No MongoDB URI provided. Run with: node seed_accounts.js '<your_mongodb_connection_string>'");
  process.exit(1);
}

async function seed() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB successfully.");

    // 1. Create or Update RV Institute
    const instCode = "RVCE";
    let institute = await Institute.findOne({ code: instCode });
    if (!institute) {
      institute = new Institute({
        IID: "INST-RVCE-01",
        name: "RV College of Engineering",
        code: instCode,
        collegeNumber: 1001,
        email: "admin@rvce.edu.in",
        password: "rvcepassword123",
        status: "Active",
        themeColorPrimary: "#1e3a8a",
        themeColorSecondary: "#3b82f6",
        phone: "080-68188100",
        address: "Mysore Road, Bengaluru",
        state: "Karnataka",
        pincode: "560059",
      });
      await institute.save();
      console.log("✅ Created Institute: RV College of Engineering");
    } else {
      institute.status = "Active";
      institute.password = "rvcepassword123";
      await institute.save();
      console.log("✅ Updated existing Institute: RV College of Engineering");
    }

    // Ensure CSE Department exists
    let dept = await Department.findOne({ instituteId: institute._id, code: "CSE" });
    if (!dept) {
      dept = new Department({
        instituteId: institute._id,
        DID: "RVCE-CSE-001",
        name: "Computer Science and Engineering",
        code: "CSE",
        facultyCount: 1,
        studentCount: 1
      });
      await dept.save();
      console.log("✅ Created Department: CSE (DID: RVCE-CSE-001)");
    }

    // 2. Create or Update Faculty (Masood)
    const facultyEmail = "masood@rvce.edu.in";
    const fid = "1001RVCECSE001";
    let faculty = await Faculty.findOne({ $or: [{ email: facultyEmail }, { FID: fid }] });
    if (!faculty) {
      faculty = new Faculty({
        instituteId: institute._id,
        FID: fid,
        name: "Prof. Masood",
        email: facultyEmail,
        password: "masoodpassword123",
        department: "CSE",
        designation: "Assistant Professor",
        qualification: "M.Tech, Ph.D",
        experience: "8 Years",
        themeColorPrimary: institute.themeColorPrimary,
        themeColorSecondary: institute.themeColorSecondary,
        kyc: { verified: true, kycType: "aadhar" },
        research: {
          papersPublished: 12,
          citations: 84,
          hIndex: 5,
          projectsGuided: 18
        }
      });
      await faculty.save();
      console.log("✅ Created Faculty: Prof. Masood (FID: " + fid + ")");
    } else {
      faculty.password = "masoodpassword123";
      faculty.email = facultyEmail;
      faculty.name = "Prof. Masood";
      await faculty.save();
      console.log("✅ Updated Faculty: Prof. Masood");
    }

    // 3. Create or Update Student (Vedanth)
    const studentEmail = "vedanth@rvce.edu.in";
    const sid = "1RV22CS001";
    let student = await Student.findOne({ email: studentEmail });
    if (!student) {
      student = new Student({
        instituteId: institute._id,
        SID: sid,
        rollNumber: sid,
        name: "Vedanth",
        email: studentEmail,
        password: "vedanthpassword123",
        department: "CSE",
        year: "3",
        semester: "5",
        phone: "9876543210",
        kyc: { verified: true, kycType: "aadhar" },
        attendance: {
          overallPercentage: 92,
          alertLevel: "Safe"
        },
        academic: {
          cgpa: 8.9,
          creditsEarned: 110
        }
      });
      await student.save();
      console.log("✅ Created Student: Vedanth (USN: " + sid + ")");
    } else {
      student.password = "vedanthpassword123";
      student.name = "Vedanth";
      await student.save();
      console.log("✅ Updated Student: Vedanth");
    }

    console.log("\n==========================================");
    console.log("🎉 ALL 3 ACCOUNTS CREATED / READY TO LOGIN");
    console.log("==========================================");
    console.log("\n1. INSTITUTE LOGIN:");
    console.log("   URL: /in/auth");
    console.log("   Email:    admin@rvce.edu.in");
    console.log("   Password: rvcepassword123");
    console.log("\n2. FACULTY LOGIN:");
    console.log("   URL: /fc/auth");
    console.log("   FID:      1001RVCECSE001");
    console.log("   Email:    masood@rvce.edu.in");
    console.log("   Password: masoodpassword123");
    console.log("\n3. STUDENT LOGIN:");
    console.log("   URL: /student/auth");
    console.log("   Email:    vedanth@rvce.edu.in");
    console.log("   Password: vedanthpassword123");
    console.log("==========================================\n");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seed();

