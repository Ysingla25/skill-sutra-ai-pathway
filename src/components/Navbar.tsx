import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Book, Briefcase, Contact, Home, Users, FileText } from 'lucide-react';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <Home className="w-4 h-4 mr-2" />
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/courses" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <Book className="w-4 h-4 mr-2" />
                    Courses
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/mentors" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <Users className="w-4 h-4 mr-2" />
                    Mentors
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/career-path" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Career Path
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/resources" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <FileText className="w-4 h-4 mr-2" />
                    Resources
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600">
                    <Contact className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex space-x-4">
            <Link to="/auth/signin">
              <Button variant="outline">Sign in</Button>
            </Link>
            <Link to="/auth/signup">
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
