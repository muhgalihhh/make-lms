import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import GuestLayout from '@/layouts/guest-layout';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 py-16">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Welcome to{' '}
                            <span className="text-blue-600 dark:text-blue-400">
                                Laravel
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                            A modern web application built with Laravel 12 and React, 
                            featuring the best practices for scalable development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="group">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Learn More
                            </Button>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <CardTitle>Modern Stack</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Built with Laravel 12, React 18, TypeScript, and Tailwind CSS for a modern development experience.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <CardTitle>Developer Friendly</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Hot reload, TypeScript support, and comprehensive tooling for efficient development.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                                    <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <CardTitle>Best Practices</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Follows industry best practices for security, performance, and maintainability.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-4">
                                    Ready to Build Something Amazing?
                                </h2>
                                <p className="text-blue-100 mb-6">
                                    Start building your next great application with confidence.
                                </p>
                                <Button variant="secondary" size="lg">
                                    Start Building
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
