'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone } from 'lucide-react';

const contacts = [
  {
    id: 1,
    name: 'DEVON LANE',
    email: 'dat.roberts@example.com',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'JANE COOPER',
    email: 'jgraham@example.com',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'DIANNE RUSSELL',
    email: 'curtis.d@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  }
];

export default function ContactList() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Contact</CardTitle>
        <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
          Voir tous
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={contact.avatar} alt={contact.name} />
                <AvatarFallback className="bg-purple-600 text-white">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-white font-medium text-sm">{contact.name}</h4>
                <p className="text-gray-400 text-xs">{contact.email}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Mail className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}