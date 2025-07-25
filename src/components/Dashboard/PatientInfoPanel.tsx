import {
  Calendar,
  AlertCircle,
  X,
  Mars
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  patientProfile,
  problems,
  immunizations,
  allergies
} from "@/lib/data/mockData";

export function PatientInfoPanel() {
  return (
    <Card className="bg-[#F4F6F8] p-4 sm:p-6 rounded-xl w-full">

      <div className="flex justify-between items-start">
        <Avatar className="h-20 w-20 border-2 border-blue-500">
          <AvatarImage
            src={patientProfile.avatar}
            className="object-cover rounded-full"
          />
          <AvatarFallback className="text-md sm:text-lg">
            {patientProfile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <Button
          size="sm"
          className="text-[10px] px-2 py-[2px] bg-black text-white hover:bg-black/80 rounded-md h-fit"
        >
          Edit Profile
        </Button>
      </div>


      <div className="mt-2">
        <h3 className="text-[15px] sm:text-[16px] font-bold text-black leading-tight">
          {patientProfile.name}
        </h3>
        <p className="text-[12px] text-muted-foreground font-medium">{patientProfile.id}</p>
      </div>


      <div className="border-t border-border my-2" />


      <div className="grid grid-cols-3 gap-x-6 text-[9px] sm:text-[9.5px] text-muted-foreground font-medium tracking-tight">
        <div>Age</div>
        <div className="whitespace-nowrap">Date of Birth</div>
        <div>Gender</div>
      </div>


      <div className="grid grid-cols-3 gap-x-6 text-[9.5px] sm:text-[10px] text-black font-semibold tracking-tight mt-1">
        <div className="whitespace-nowrap">{patientProfile.age}</div>
        <div className="whitespace-nowrap">{patientProfile.dateOfBirth}</div>
        <div className="flex items-center gap-[4px] whitespace-nowrap">
          <Mars className="w-[12px] h-[12px] text-black -mt-[1px]" />
          <span className="leading-none">{patientProfile.gender}</span>
        </div>
      </div>


      <div className="mt-3">
        <p className="text-[8.5px] text-muted-foreground">Insurance Number</p>
        <p className="text-[10px] font-semibold text-black">{patientProfile.insuranceNumber}</p>
      </div>


      <Card className="bg-white shadow-sm rounded-md mt-5">
        <CardHeader className="pb-1 px-4 pt-4 flex flex-row items-center justify-between">
          <CardTitle className="text-[9.5px] sm:text-[10px] font-medium text-black">
            Problems
          </CardTitle>
          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
            <span className="text-lg">⋯</span>
          </Button>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-2 divide-y divide-gray-200">
          {problems.map((problem, idx) => (
            <div key={problem.id} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-red-500 bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-semibold text-black">
                  {problem.name}
                </span>
              </div>
              <p className="text-[9.5px] sm:text-[10px] text-muted-foreground pl-7 mt-1">
                {problem.date}
              </p>
              {problem.description && (
                <p className="text-[9.5px] sm:text-[10px] text-muted-foreground pl-7">
                  {problem.description}
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>


      <Card className="bg-white shadow-sm rounded-md mt-4">
        <CardHeader className="pb-1 px-4 pt-4 flex flex-row items-center justify-between">
          <CardTitle className="text-[9.5px] sm:text-[10px] font-medium text-black">
            Immunizations
          </CardTitle>
          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
            <span className="text-lg">⋯</span>
          </Button>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-2 divide-y divide-gray-200">
          {immunizations.map((im) => (
            <div key={im.id} className="py-2 first:pt-0 last:pb-0">
              <p className="text-[9.5px] sm:text-[10px] font-semibold text-black">
                {im.name}
              </p>
              <p className="text-[9.5px] sm:text-[10px] text-muted-foreground">
                {im.date} - {im.dose}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>


      <Card className="bg-white shadow-sm rounded-md mt-4">
        <CardHeader className="pb-1 px-4 pt-4 flex flex-row items-center justify-between">
          <CardTitle className="text-[9.5px] sm:text-[10px] font-medium text-black">
            Allergies
          </CardTitle>
          <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
            <span className="text-lg">⋯</span>
          </Button>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-2 space-y-2">

          <div className="flex gap-2">
            {allergies.slice(0, 2).map((allergy) => (
              <Badge
                key={allergy.id}
                variant="outline"
                className="bg-blue-50 border border-blue-500 text-blue-600 px-2 py-[3px] rounded-full text-[9.5px] sm:text-[10px] flex items-center gap-1"
              >
                {allergy.name}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-4 w-4 hover:bg-transparent text-blue-500"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>


          <div className="flex gap-2">
            {allergies.slice(2).map((allergy) => (
              <Badge
                key={allergy.id}
                variant="outline"
                className="bg-blue-50 border border-blue-500 text-blue-600 px-2 py-[3px] rounded-full text-[9.5px] sm:text-[10px] flex items-center gap-1"
              >
                {allergy.name}
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-4 w-4 hover:bg-transparent text-blue-500"
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>


    </Card>
  );
}
