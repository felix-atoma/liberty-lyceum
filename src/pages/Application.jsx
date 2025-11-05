import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  School,
  Upload,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  Download,
  FileText,
  Shield,
  Globe,
  Languages,
  Heart,
  Eye,
  EyeOff,
  X,
  AlertCircle
} from 'lucide-react'

const Application = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    
    // Academic Information
    currentSchool: '',
    gradeLevel: '',
    programInterest: '',
    startTerm: '',
    previousQualifications: '',
    extracurricular: '',
    
    // Parent/Guardian Information
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    parentOccupation: '',
    relationship: '',
    emergencyContact: '',
    
    // Medical Information
    medicalConditions: '',
    allergies: '',
    medications: '',
    insuranceProvider: '',
    insuranceNumber: '',
    
    // Additional Information
    howHeard: '',
    specialNeeds: '',
    languageProficiency: '',
    siblings: ''
  })

  const [showPassword, setShowPassword] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { number: 1, title: 'Student Info', icon: User, description: 'Personal details' },
    { number: 2, title: 'Contact Details', icon: MapPin, description: 'Address & communication' },
    { number: 3, title: 'Academic Background', icon: School, description: 'Education history' },
    { number: 4, title: 'Parent/Guardian', icon: Users, description: 'Family information' },
    { number: 5, title: 'Medical Info', icon: Heart, description: 'Health details' },
    { number: 6, title: 'Documents', icon: FileText, description: 'Upload required files' },
    { number: 7, title: 'Review & Submit', icon: CheckCircle, description: 'Final confirmation' }
  ]

  const programOptions = [
    'Early Years (2-5 years)',
    'Primary School (6-11 years)',
    'Middle School (12-14 years)',
    'High School - IB Diploma',
    'High School - Cambridge A-Levels',
    'Summer School Program',
    'ESL Support Program'
  ]

  const termOptions = [
    'September 2024',
    'January 2025',
    'April 2025',
    'September 2025'
  ]

  const countryOptions = [
    'Ghana', 'Nigeria', 'United States', 'United Kingdom', 'Canada',
    'Germany', 'France', 'China', 'India', 'South Africa', 'Other'
  ]

  const languageOptions = [
    'English', 'French', 'Spanish', 'Arabic', 'Chinese', 'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateStep = (step) => {
    const errors = {}
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) errors.firstName = 'First name is required'
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
        if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required'
        if (!formData.gender) errors.gender = 'Gender is required'
        if (!formData.nationality.trim()) errors.nationality = 'Nationality is required'
        break
        
      case 2:
        if (!formData.email.trim()) errors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid'
        if (!formData.phone.trim()) errors.phone = 'Phone number is required'
        if (!formData.address.trim()) errors.address = 'Address is required'
        if (!formData.country) errors.country = 'Country is required'
        break
        
      // Add validation for other steps
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newFiles = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }))
    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    alert('Application submitted successfully!')
    setIsSubmitting(false)
  }

  const StepIndicator = () => (
    <div className="flex flex-col md:flex-row items-center justify-between mb-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex items-center flex-1 w-full md:w-auto">
            <button
              onClick={() => setCurrentStep(step.number)}
              className={`flex items-center space-x-4 p-3 rounded-xl transition-all w-full md:w-auto ${
                currentStep >= step.number
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                currentStep >= step.number
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200'
              }`}>
                {currentStep > step.number ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <step.icon className="w-5 h-5" />
                )}
              </div>
              <div className="text-left">
                <div className={`text-sm font-semibold ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 hidden md:block">
                  {step.description}
                </div>
              </div>
            </button>
          </div>
          {index < steps.length - 1 && (
            <div className={`hidden md:block flex-1 h-1 mx-4 ${
              currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  )

  const InputField = ({ label, name, type = 'text', required = false, icon: Icon, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
            Icon ? 'pl-11' : 'pl-4'
          } ${
            formErrors[name] 
              ? 'border-red-300 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          }`}
          required={required}
          {...props}
        />
        {formErrors[name] && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
            <AlertCircle size={16} />
          </div>
        )}
      </div>
      {formErrors[name] && (
        <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
      )}
    </div>
  )

  const SelectField = ({ label, name, options, required = false, icon: Icon, ...props }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon size={20} />
          </div>
        )}
        <select
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none ${
            Icon ? 'pl-11' : 'pl-4'
          } ${
            formErrors[name] 
              ? 'border-red-300 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          }`}
          required={required}
          {...props}
        >
          <option value="">Select {label}</option>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {formErrors[name] && (
        <p className="text-red-500 text-xs mt-1">{formErrors[name]}</p>
      )}
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Student Information</h3>
              <p className="text-gray-600">Tell us about the student applying to Liberty Lyceum</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="First Name" 
                name="firstName" 
                required 
                icon={User}
              />
              <InputField 
                label="Last Name" 
                name="lastName" 
                required 
                icon={User}
              />
              <InputField 
                label="Date of Birth" 
                name="dateOfBirth" 
                type="date" 
                required 
                icon={Calendar}
              />
              <SelectField 
                label="Gender" 
                name="gender" 
                options={['Male', 'Female', 'Other']} 
                required 
              />
              <InputField 
                label="Nationality" 
                name="nationality" 
                required 
                icon={Globe}
              />
              <InputField 
                label="Passport Number" 
                name="passportNumber" 
                icon={FileText}
              />
            </div>
          </motion.div>
        )
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">How can we reach you? We'll use this for important updates.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="Email Address" 
                name="email" 
                type="email" 
                required 
                icon={Mail}
              />
              <InputField 
                label="Phone Number" 
                name="phone" 
                type="tel" 
                required 
                icon={Phone}
              />
              <div className="md:col-span-2">
                <InputField 
                  label="Address" 
                  name="address" 
                  required 
                  icon={MapPin}
                />
              </div>
              <InputField 
                label="City" 
                name="city" 
                required 
              />
              <InputField 
                label="State/Province" 
                name="state" 
              />
              <SelectField 
                label="Country" 
                name="country" 
                options={countryOptions} 
                required 
                icon={Globe}
              />
              <InputField 
                label="Postal Code" 
                name="postalCode" 
              />
            </div>
          </motion.div>
        )
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Background</h3>
              <p className="text-gray-600">Tell us about the student's educational journey</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <InputField 
                label="Current School" 
                name="currentSchool" 
                icon={School}
              />
              <InputField 
                label="Current Grade Level" 
                name="gradeLevel" 
                required 
              />
              <SelectField 
                label="Program of Interest" 
                name="programInterest" 
                options={programOptions} 
                required 
                icon={BookOpen}
              />
              <SelectField 
                label="Desired Start Term" 
                name="startTerm" 
                options={termOptions} 
                required 
                icon={Calendar}
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Previous Qualifications & Achievements
                </label>
                <textarea
                  name="previousQualifications"
                  value={formData.previousQualifications}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="List any previous academic achievements, awards, or special qualifications..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Extracurricular Activities & Interests
                </label>
                <textarea
                  name="extracurricular"
                  value={formData.extracurricular}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Sports, arts, clubs, volunteer work, etc..."
                />
              </div>
            </div>
          </motion.div>
        )
      
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Parent/Guardian Information</h3>
              <p className="text-gray-600">Tell us about the student's family or guardians</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="Full Name" 
                name="parentName" 
                required 
                icon={User}
              />
              <SelectField 
                label="Relationship to Student" 
                name="relationship" 
                options={['Mother', 'Father', 'Legal Guardian', 'Grandparent', 'Other']} 
                required 
              />
              <InputField 
                label="Email Address" 
                name="parentEmail" 
                type="email" 
                required 
                icon={Mail}
              />
              <InputField 
                label="Phone Number" 
                name="parentPhone" 
                type="tel" 
                required 
                icon={Phone}
              />
              <InputField 
                label="Occupation" 
                name="parentOccupation" 
                icon={User}
              />
              <InputField 
                label="Emergency Contact" 
                name="emergencyContact" 
                icon={Phone}
                placeholder="Alternative phone number"
              />
            </div>
          </motion.div>
        )
      
      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Information</h3>
              <p className="text-gray-600">Important health information for student safety and care</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Medical Conditions
                </label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Any known medical conditions, disabilities, or health concerns..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Allergies
                  </label>
                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Food, medication, environmental allergies..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Medications
                  </label>
                  <textarea
                    name="medications"
                    value={formData.medications}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Regular medications and dosages..."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label="Health Insurance Provider" 
                  name="insuranceProvider" 
                />
                <InputField 
                  label="Insurance Policy Number" 
                  name="insuranceNumber" 
                />
              </div>
            </div>
          </motion.div>
        )
      
      case 6:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Required Documents</h3>
              <p className="text-gray-600">Upload all necessary documents to complete your application</p>
            </div>
            
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-all">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Upload Documents</h4>
                <p className="text-gray-500 mb-4">
                  Drag and drop files here, or click to browse
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all cursor-pointer inline-block"
                >
                  Choose Files
                </label>
                <p className="text-sm text-gray-400 mt-2">
                  PDF, JPG, PNG up to 10MB each
                </p>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700">Uploaded Files</h4>
                  {uploadedFiles.map(file => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-700">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Required Documents Checklist</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Birth Certificate or Passport</li>
                  <li>• Previous School Reports (Last 2 years)</li>
                  <li>• Passport-sized Photographs (2)</li>
                  <li>• Immunization Records</li>
                  <li>• Parent/Guardian ID Copy</li>
                  <li>• Any Special Needs Assessment Reports</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )
      
      case 7:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Application</h3>
              <p className="text-gray-600">Please review all information before submitting</p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Student Information', fields: ['firstName', 'lastName', 'dateOfBirth', 'gender', 'nationality', 'passportNumber'] },
                { title: 'Contact Information', fields: ['email', 'phone', 'address', 'city', 'state', 'country', 'postalCode'] },
                { title: 'Academic Information', fields: ['currentSchool', 'gradeLevel', 'programInterest', 'startTerm', 'previousQualifications', 'extracurricular'] },
                { title: 'Parent/Guardian', fields: ['parentName', 'relationship', 'parentEmail', 'parentPhone', 'parentOccupation', 'emergencyContact'] },
                { title: 'Medical Information', fields: ['medicalConditions', 'allergies', 'medications', 'insuranceProvider', 'insuranceNumber'] }
              ].map(section => (
                <div key={section.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">{section.title}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.fields.map(field => (
                      formData[field] && (
                        <div key={field}>
                          <span className="text-sm font-medium text-gray-500 capitalize">
                            {field.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                          </span>
                          <p className="text-gray-900">{formData[field]}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">Application Fee</h4>
                <p className="text-blue-700">
                  A non-refundable application fee of GHS 500 is required. 
                  You will be redirected to our secure payment portal after submission.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I certify that all information provided is accurate and complete. 
                  I understand that providing false information may result in application rejection 
                  or subsequent dismissal from Liberty Lyceum.
                </label>
              </div>
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <>
      <Helmet>
        <title>Application Form - Liberty Lyceum International School | Accra, Ghana</title>
        <meta name="description" content="Apply to Liberty Lyceum International School in Accra, Ghana. Complete our comprehensive online application for IB and Cambridge programs." />
        <meta name="keywords" content="international school Accra, IB diploma Ghana, Cambridge A-Levels, school application Ghana" />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-overlay opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full mix-blend-overlay opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400 rounded-full mix-blend-overlay opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-semibold">Join Our Prestigious Community</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-serif leading-tight">
              Application
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Form
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Begin your transformative educational journey at Liberty Lyceum. 
              Our comprehensive application process ensures we find the perfect fit for every student.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-yellow-300">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure & Encrypted Form</span>
              </div>
              <div className="flex items-center space-x-2 text-green-300">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Takes 15-20 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300">
                <Users className="w-5 h-5" />
                <span className="text-sm">Admissions Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Application Process */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Step Indicator */}
            <StepIndicator />

            {/* Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>

                {/* Enhanced Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200 space-y-4 sm:space-y-0">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-2 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}
                  >
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    <span>Previous</span>
                  </button>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">
                      Step {currentStep} of {steps.length}
                    </p>
                    <div className="flex space-x-1">
                      {steps.map((step) => (
                        <div
                          key={step.number}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentStep >= step.number ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {currentStep < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
                    >
                      <span>Next Step</span>
                      <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle size={18} />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Help Section */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Need Assistance?</h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Our admissions team is here to help you through every step of the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="mailto:admissions@libertylyceum.edu.gh" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Mail size={16} />
                    <span>admissions@libertylyceum.edu.gh</span>
                  </a>
                  <a href="tel:+233241234567" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <Phone size={16} />
                    <span>+233 24 123 4567</span>
                  </a>
                  <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                    <Clock size={16} />
                    <span>Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Application Requirements */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-serif">Application Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From application to acceptance, we guide you through every step of your Liberty Lyceum journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: BookOpen, 
                title: 'Complete Application', 
                description: 'Fill out our comprehensive online form with student and family information',
                duration: '15-20 mins'
              },
              { 
                icon: Upload, 
                title: 'Submit Documents', 
                description: 'Upload required academic records, identification, and supporting documents',
                duration: '5-10 mins'
              },
              { 
                icon: Clock, 
                title: 'Assessment & Interview', 
                description: 'Student assessment and family interview with our admissions team',
                duration: '45-60 mins'
              },
              { 
                icon: Award, 
                title: 'Admission Decision', 
                description: 'Receive comprehensive admission decision and welcome package',
                duration: '2-3 weeks'
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6 font-serif"
          >
            Begin Your Liberty Lyceum Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join our community of global learners and discover the Liberty Lyceum difference. 
            Download our prospectus or schedule a personalized campus tour today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center space-x-3 hover:scale-105 transform">
              <Download size={20} />
              <span>Download Full Prospectus</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all hover:scale-105 transform shadow-2xl hover:shadow-3xl">
              Schedule Virtual Tour
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-blue-200 text-sm"
          >
            <p>Limited spots available for 2024-2025 academic year • Rolling admissions</p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm font-semibold mb-6">TRUSTED BY FAMILIES WORLDWIDE</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['IB World School', 'Cambridge International', 'CIS Accredited', 'NEASC Member'].map((org, index) => (
                <motion.div
                  key={org}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-400 font-semibold text-sm"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Application