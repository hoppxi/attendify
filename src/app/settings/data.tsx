
interface settingsAppDataFormat {
    groupName: string;
    groupMembers: Array<{
        setting: string;
        description: string;
        icon: string;
        href?: string;
    }>
}

export const settingsAppData: Array<settingsAppDataFormat> = [
    {
        "groupName": "User Settings",
        "groupMembers": [    
            { "setting": "Account Settings", "description": "Manage your account settings", "icon": "settings", "href": "/settings/account" },
            { "setting": "Profile", "description": "Manage your profile settings", "icon": "account_circle" },
            { "setting": "Notification", "description": "Set your notification preferences", "icon": "notifications" },
        ]
    },
    {
        "groupName": "System Configuration",
        "groupMembers": [
            { "setting": "Attendance Rules", "description": "Update how attendance is managed", "icon": "video_call" },
            { "setting": "QR Code Settings", "description": "Set QR code settings", "icon": "article", "href": "/settings/qr-code"},
        ]
    },
    {
        "groupName": "Search and Discovery Settings",
        "groupMembers": [
            { "setting": "Search", "description": "Customize your search settings", "icon": "filter_list" },
        ]
    },
    {
        "groupName": "Analytics Settings",
        "groupMembers": [
            { "setting": "Students Analytics", "description": "View your students stats (Current Branch)", "icon": "insights", "href": "/settings/analytics/students" },
            { "setting": "Branches Analytics", "description": "View analytics for all branches (Limited access)", "icon": "bar_chart", "href": "/settings/analytics/branches" },
            { "setting": "Company Metrics", "description": "Track performance and analytics of your company", "icon": "trending_up", "href": "/settings/analytics/company" },
        ]
    },
    {
        "groupName": "Customization Settings",
        "groupMembers": [
            { "setting": "Interface Settings", "description": "Set your interface color and other preferences", "icon": "view_quilt", "href": "/settings/interface" }
        ]
    },
    // {
    //     "groupName": "Security Settings",
    //     "groupMembers": [
    //         { "setting": "Data Privacy", "description": "Manage your data privacy settings", "icon": "lock" },
    //         { "setting": "Security Logs", "description": "View your security logs", "icon": "security" },
    //         { "setting": "Account Access Logs", "description": "Track account access history", "icon": "history" },
    //         { "setting": "Login Attempts", "description": "Monitor login attempts", "icon": "login" }
    //     ]
    // },
    {
        "groupName": "Help and Support Settings",
        "groupMembers": [
            { "setting": "Help Center", "description": "Access help and support resources", "icon": "help_center", "href": "/info/support/help" },
            { "setting": "Support Requests", "description": "Submit and track support requests", "icon": "support", "href": "/info/support/feedback" },
            { "setting": "User Guides", "description": "Access user guides and tutorials", "icon": "book", "href": "/info/support/guides" }
        ]
    }
]
