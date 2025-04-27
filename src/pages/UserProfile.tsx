
import Layout from '@/components/layout/Layout';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, MapPin, Clock, Heart } from 'lucide-react';

const UserProfile = () => {
  return (
    <Layout>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Sidebar */}
          <div className="space-y-6">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24">
                    <User className="w-12 h-12" />
                  </Avatar>
                  <h2 className="mt-4 text-2xl font-bold">John Doe</h2>
                  <p className="text-gray-500">john.doe@example.com</p>
                  <div className="flex items-center mt-2 text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>New York, USA</span>
                  </div>
                  <Button className="w-full mt-6 bg-foodnest-500 hover:bg-foodnest-600">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Account Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Member since</span>
                    <span>Jan 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Orders</span>
                    <span>23</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Reviews</span>
                    <span>12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="orders" className="animate-fade-in">
              <TabsList className="w-full">
                <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
                <TabsTrigger value="favorites" className="flex-1">Favorites</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="mt-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Recent Orders</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((order) => (
                        <div key={order} className="flex items-center p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">Order #{order}2024</h4>
                            <p className="text-sm text-gray-500">Pizza Hut</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$24.99</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>2 days ago</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="favorites" className="mt-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Favorite Restaurants</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((fav) => (
                        <div key={fav} className="flex items-center p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">Restaurant {fav}</h4>
                            <p className="text-sm text-gray-500">Italian • $$</p>
                          </div>
                          <Heart className="w-6 h-6 text-foodnest-500 fill-current" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Your Reviews</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Restaurant {review}</h4>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            Great food and excellent service! Would definitely recommend.
                          </p>
                          <p className="mt-2 text-sm text-gray-500">Posted 2 weeks ago</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
