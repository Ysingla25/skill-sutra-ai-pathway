import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "support@skillsutra.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 8934678723",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "Urban Estate Phase II, Near Aneja's, Patiala, 147002",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Type your message here..." className="h-32" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-muted-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
