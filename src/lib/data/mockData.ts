// Mock data for the medical dashboard

export const patientProfile = {
  id: "PT-2025-0010",
  name: "Zuri Okeke",
  avatar: "profile.jpg",
  age: "35 yrs 4 mos",
  dateOfBirth: "18-03-1990",
  gender: "Male",
  insuranceNumber: "0 65495848031"
};

export const problems = [
  {
    id: 1,
    name: "Hypertension",
    date: "Feb 14, 2025",
    description: "The patient's hypertension has been recorded in the past",
    status: "active"
  },
  {
    id: 2,
    name: "Asthma",
    date: "Mar 14, 2025",
    description: "",
    status: "active"
  }
];

export const immunizations = [
  {
    id: 1,
    name: "BCG (Tuberculosis)",
    date: "Feb 14, 2017",
    dose: "Dose 1"
  },
  {
    id: 2,
    name: "DTP (Diphtheria, Tetanus, Pertussis)",
    date: "Mar 14, 2012",
    dose: "Dose 2"
  }
];

export const allergies = [
  { id: 1, name: "Lidocaine" },
  { id: 2, name: "Penicillin" },
  { id: 3, name: "Lactose" }
];

export const upcomingAppointment = {
  type: "Asthma",
  doctor: "Dr. Alejandro Mcashiv",
  date: "22-07-2025"
};

export const doctors = [
  { id: 1, name: "Dr. Smith (GP)", role: "GP", avatar: "/profile.jpg" },
  { id: 2, name: "Dr. Thandiwe Ncube", role: "", avatar: "/profile.jpg" },
  { id: 3, name: "Dr. Amina Diallo", role: "", avatar: "/profile.jpg" }
];

export const healthReadings = [
  {
    id: 1,
    type: "Body Temperature",
    value: "99.8",
    unit: "°F",
    icon: "thermometer",
    color: "temp"
  },
  {
    id: 2,
    type: "Blood Pressure",
    value: "123/95",
    unit: "mmHg",
    icon: "heart",
    color: "bp"
  },
  {
    id: 3,
    type: "Blood Sugar",
    value: "112",
    unit: "mg/dl",
    icon: "droplet",
    color: "sugar"
  },
  {
    id: 4,
    type: "Body Weight",
    value: "84",
    unit: "kg",
    icon: "scale",
    color: "weight"
  }
];

export const appointments = [
  {
    id: 1,
    type: "Asthma",
    doctor: "Dr. Smith",
    doctorAvatar: "/profile.jpg",
    date: "22 Jul, 11:00 am - 12:00 pm",
    status: "upcoming"
  },
  {
    id: 2,
    type: "General check up",
    doctor: "Dr. Thandiwe Ncube",
    doctorAvatar: "/profile.jpg",
    date: "24 Jul, 01:00 pm - 02:00 pm",
    status: "upcoming"
  },
  {
    id: 3,
    type: "Counselling",
    doctor: "Dr. Amina Diallo",
    doctorAvatar: "/profile.jpg",
    date: "29 Jul, 11:00 am - 01:00 pm",
    status: "upcoming"
  }
];

export const chatMessages = [
  {
    id: 1,
    type: "system",
    message: "Here are the available time slots on July 24:",
    timestamp: "10:00 AM - 11:00 AM",
    avatar: "/profile.jpg"
  },
  {
    id: 2,
    type: "system",
    message: "02:00 PM - 03:00 PM",
    avatar: "/profile.jpg"
  },
  {
    id: 3,
    type: "system",
    message: "03:00 PM - 04:00 PM",
    avatar: "/profile.jpg"
  },
  {
    id: 4,
    type: "user",
    message: "10:00 AM - 11:00 AM",
    hasAttachment: true,
    attachmentCount: 2,
    avatar: "/profile.jpg"
  },
  {
    id: 5,
    type: "system",
    message: "Would you like to attach a note or any medical reports?",
    timestamp: "",
    avatar: "/profile.jpg"
  },
  {
    id: 6,
    type: "user", 
    message: "Yes, uploading now",
    avatar: "/profile.jpg"
  },
  {
    id: 7,
    type: "system",
    message: "All set! Please confirm your booking with:",
    details: {
      date: "📅 Date: 24 July 2025",
      time: "⏰ Time: 11:30 AM",
      hospital: "🏥 Hospital: CityGate Health Center",
      doctor: "👨‍⚕️ Doctor: Dr. Amina Rao"
    },
    avatar: "/profile.jpg"
  },
  {
    id: 8,
    type: "user",
    message: "Would you like to confirm?",
    avatar: "/profile.jpg"
  },
  {
    id: 9,
    type: "system",
    message: "✅ Your appointment is confirmed!",
    subMessage: "We've sent the details to your email and app dashboard. Get well soon! 💙",
    avatar: "/profile.jpg"
  }
];

export const profileProgress = {
  percentage: 85,
  message: "Completed the remaining steps in the onboarding profile before booking"
};