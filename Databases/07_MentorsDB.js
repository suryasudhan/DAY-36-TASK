// selecting Database

use("Zen_class_programme");

// Creating collections for mentors

db.createCollection("mentors");

// Creating Documents for mentors

db.mentors.insertMany([
  {
    mentorId: 1,
    mentorName: "sathish",
    mentorEmail: "sathish@gmail.com",
    menteeCount:20
  },
  {
    mentorId: 2,
    mentorName: "naga",
    mentorEmail: "naga@gmail.com",
     menteeCount:11
  },
  {
    mentorId: 3,
    mentorName: "rupan",
    mentorEmail: "rupan@gmail.com",
     menteeCount:30
  },
  {
    mentorId: 4,
    mentorName: "aktar",
    mentorEmail: "minato@gmail.com",
     menteeCount:12
  },
    {
    mentorId: 5,
    mentorName: "surya",
    mentorEmail: "sathish@gmail.com",
     menteeCount:21
  },
  {
    mentorId: 6,
    mentorName: "madhu",
    mentorEmail: "naga@gmail.com",
     menteeCount:23
  },
  {
    mentorId: 7,
    mentorName: "rocky",
    mentorEmail: "rupan@gmail.com",
     menteeCount:15
  },
  {
    mentorId: 8,
    mentorName: "ajith",
    mentorEmail: "minato@gmail.com",
     menteeCount:16
  },
])
