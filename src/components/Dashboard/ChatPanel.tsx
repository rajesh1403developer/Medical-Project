import { useState } from "react";
import { Send, Paperclip, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { chatMessages } from "@/lib/data/mockData";

export function ChatPanel() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) setMessage("");
  };

  return (
    <div className="p-2">
      <div className="bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] p-[1px] rounded-xl h-[calc(100vh-140px)]">
        <Card className="h-full flex flex-col bg-[#F0FAF7] rounded-xl overflow-hidden">
          <CardContent className="flex-1 p-3 overflow-y-auto custom-scrollbar">
            <div className="space-y-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex items-end gap-1",
                    msg.type === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {msg.type !== "user" && (
                    <Avatar className="h-5 w-5">
                      <AvatarImage
                        src={msg.avatar ?? "/avatars/02.png"}
                        className="object-cover"
                      />
                      <AvatarFallback>Dr</AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={cn(
                      "max-w-[75%] rounded-xl px-2.5 py-1.5 space-y-1 text-[10px] leading-tight shadow",
                      msg.type === "user"
                        ? "bg-[#DCF8C6] text-black"
                        : "bg-white border border-gray-200"
                    )}
                  >
                    <div className="break-words whitespace-pre-line">{msg.message}</div>

                    {/* Button Time Slots */}
                    {[1, 2, 3].includes(msg.id) && (
                      <Button
                        size="sm"
                        className="w-full text-[9.5px] px-2 py-[5px] text-white font-medium bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] hover:opacity-90 h-auto min-h-0 text-center whitespace-normal break-words leading-tight rounded-md"
                      >
                        {msg.message}
                      </Button>
                    )}

                    {/* Attachment Preview */}
                    {msg.hasAttachment && (
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-2 mt-1">
                          <div className="h-6 w-6 bg-muted rounded border-2 border-white flex items-center justify-center">
                            <Image className="h-3 w-3" />
                          </div>
                          <div className="h-6 w-6 bg-primary rounded border-2 border-white flex items-center justify-center text-white text-[9px] font-medium">
                            +{msg.attachmentCount}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Appointment Details */}
                    {msg.details && (
                      <div className="text-[9px] text-muted-foreground space-y-[1px]">
                        <div>{msg.details.date}</div>
                        <div>{msg.details.time}</div>
                        <div>{msg.details.hospital}</div>
                        <div>{msg.details.doctor}</div>
                      </div>
                    )}

                    {/* Confirm Button */}
                    {msg.id === 8 && (
                      <Button
                        size="sm"
                        className="w-full text-[9.5px] px-2 py-[5px] font-semibold text-white bg-gradient-to-r from-[#2A85FF] to-[#00D9A5] hover:opacity-90 h-auto min-h-0 whitespace-normal break-words"
                      >
                        Yes, confirm
                      </Button>
                    )}

                    {msg.subMessage && (
                      <div className="text-[9px] text-muted-foreground">{msg.subMessage}</div>
                    )}

                    {msg.timestamp && (
                      <div className="text-[8.5px] text-muted-foreground text-right">
                        {msg.timestamp}
                      </div>
                    )}
                  </div>

                  {msg.type === "user" && (
                    <Avatar className="h-5 w-5">
                      <AvatarImage
                        src={msg.avatar ?? "/avatars/01.png"}
                        className="object-cover"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </CardContent>

          {/* Chat Input */}
          <div className="p-3 border-t bg-white">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Ask me anything…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="pr-20 text-[10px] py-2 rounded-full"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="p-1 h-6 w-6">
                    <Paperclip className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-1 h-6 w-6"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
