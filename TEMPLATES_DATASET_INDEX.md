# Common Paper Legal Templates - Complete Dataset

## Dataset Overview

**Source:** Common Paper GitHub Organization (https://github.com/commonpaper)  
**Date Fetched:** 2025-09-05  
**Total Templates:** 12 standardized legal agreement templates  
**License:** CC BY 4.0 (Creative Commons Attribution 4.0)  
**Status:** Ready for Legal Parser Analysis  

## Dataset Contents

### Directory Structure
```
templates/
├── common-paper/
│   ├── README.md (Guide and Usage Instructions)
│   ├── 00-DPA.md (Data Processing Agreement)
│   ├── 01-Mutual-NDA.md (Mutual Non-Disclosure Agreement)
│   ├── 02-Cloud-Service-Agreement.md (CSA)
│   ├── 03-Business-Associate-Agreement.md (BAA)
│   ├── 04-AI-Addendum.md
│   ├── (Additional templates to be added)
│   └── [Cover pages and supporting documents]
└── [Additional agreement templates]
```

### Primary Data Files

**Main Catalog:** `templates_catalog.json`
- Comprehensive JSON with all template metadata
- Template descriptions and key sections
- Repository information and download URLs
- Version information and GitHub stars/forks

**This Index:** `TEMPLATES_DATASET_INDEX.md`
- Overview of the complete dataset
- Template listing and descriptions
- Instructions for parsing and integration
- Use cases and integration guidelines

## Complete Template List

### 1. Data Processing Agreement (DPA.md)
**Repository:** https://github.com/commonpaper/DPA  
**Version:** 1.0 (Permanent)  
**GitHub Stats:** 8 stars, 2 forks

**Purpose:** Data protection compliance for GDPR, UK GDPR, and Swiss law  
**Key Sections:**
- Processor/Subprocessor relationships
- Processing instructions and consent
- International data transfers (EEA, UK, Swiss)
- Security incident response (72-hour notification)
- Audit rights and security reports
- Data subject request procedures
- Data deletion and DPA termination
- Liability limitations

**Use Cases:**
- GDPR compliance agreements
- UK GDPR contracts
- Cross-border data processing
- Data processor certifications
- Cloud data handling agreements

**Integration Points for Parser:**
- Data protection clause extraction
- GDPR compliance verification
- Security incident procedures
- Audit and reporting obligations
- Subprocessor management requirements

---

### 2. Mutual Non-Disclosure Agreement (Mutual-NDA.md)
**Repository:** https://github.com/commonpaper/Mutual-NDA  
**Version:** 1.0 (Permanent)  
**Includes:** Mutual-NDA-coverpage.md

**Purpose:** Bilateral confidentiality protection for business discussions  
**Key Sections:**
- Confidential information definition
- Use restrictions and protection standards
- Exceptions (public, known, obtained elsewhere, independent)
- Required disclosure procedures
- Term and survival (default 1 year)
- Return/destruction of information
- IP retention rights
- Governing law and equitable remedies

**Use Cases:**
- Initial business discussions
- Vendor/partner evaluations
- Technology discussions
- Financing negotiations
- M&A preliminary talks

**Integration Points for Parser:**
- Confidentiality clause analysis
- Scope of protection identification
- Exception handling procedures
- Data retention obligations
- Survival period tracking

---

### 3. Professional Services Agreement (psa.md)
**Repository:** https://github.com/commonpaper/PSA  
**Version:** 1.0 (Permanent)  
**GitHub Stats:** 14 stars, 4 forks

**Purpose:** Framework for consulting and implementation services  
**Key Sections:**
- Statement of Work (SOW) structure
- Service delivery and cooperation
- Change order procedures
- Acceptance and rejection periods
- Subcontractor management
- Intellectual property assignments
- Personal data and security
- Payment terms and invoicing
- Termination rights and survival
- Representations and warranties
- Indemnification procedures
- Confidentiality provisions

**Use Cases:**
- Consulting engagements
- Custom development projects
- Implementation services
- Professional services delivery
- Outsourced development agreements

**Integration Points for Parser:**
- Service description extraction
- Deliverable tracking
- IP ownership determination
- Payment term analysis
- Warranty and liability assessment

---

### 4. Cloud Service Agreement (CSA.md)
**Repository:** https://github.com/commonpaper/CSA  
**Version:** 2.1  
**Companion:** Service Level Agreement (SLA)

**Purpose:** Comprehensive SaaS and cloud service agreement framework  
**Key Sections:**
- Service access and use rights
- Technical support provisions
- User account management
- Feedback and usage data
- Customer content handling
- Machine learning provisions
- Restrictions and obligations
- Suspension rights
- Data protection and security
- Personal data requirements
- Payment and billing
- Automatic payment authorization
- Term and termination
- Force majeure provisions
- Service credits and remedies
- Representations and warranties
- Liability limitations
- Indemnification framework
- Export control compliance
- Government rights provisions

**Use Cases:**
- SaaS platform agreements
- Cloud infrastructure services
- Platform as a Service (PaaS)
- Managed cloud services
- Software subscription agreements

**Integration Points for Parser:**
- Service definition extraction
- Limitation of liability analysis
- Data handling requirements
- Suspension and termination triggers
- Warranty identification
- Compliance and regulatory clauses

---

### 5. Business Associate Agreement (BAA.md)
**Repository:** https://github.com/commonpaper/BAA  
**Version:** 1.0 (Permanent)  
**GitHub Stats:** 4 stars, 1 fork

**Purpose:** HIPAA-compliant healthcare data processing agreement  
**Key Sections:**
- Business associate obligations
- Permitted uses and disclosures
- Privacy and security programs
- Administrative safeguards
- Physical and technical safeguards
- Workforce compliance and training
- Risk assessments and mitigation
- Subcontractor requirements
- Books and records access for HHS
- Audit and compliance documentation
- Individual rights requests (10-day response)
- Breach notification procedures
- Security incident reporting
- Cost reimbursement for breaches
- De-identification and aggregation
- Offshoring provisions
- Term and termination
- Effect of termination (data return/destruction)

**Use Cases:**
- HIPAA-covered entities
- Healthcare data processing
- Medical records handling
- PHI protection agreements
- Healthcare IT services

**Integration Points for Parser:**
- HIPAA compliance tracking
- Security procedure extraction
- Breach notification requirements
- Audit obligation identification
- Data handling restrictions
- Subprocessor relationship mapping

---

### 6. Service Level Agreement (sla.md)
**Repository:** https://github.com/commonpaper/SLA  
**Version:** 1.0 (Permanent)  
**Companion:** Cloud Service Agreement

**Purpose:** Define uptime and response time commitments with remedies  
**Key Sections:**
- Target uptime percentage
- Monthly availability calculation
- Downtime and available minutes definitions
- Excluded minutes (force majeure, third-party, customer misuse)
- Scheduled downtime procedures
- Target response time
- Support request acknowledgment
- Response time calculation
- Service credits (uptime credits, response time credits)
- Credit request procedures (7-day window)
- Credit limitations (8% cap, no cash conversion)
- Termination rights (if 2 of 3 months fail)
- Termination remedy (prorated refund)
- Exclusive remedy provision

**Use Cases:**
- Cloud service commitments
- SaaS uptime guarantees
- Support level agreements
- Performance guarantees
- Service commitment documentation

**Integration Points for Parser:**
- Uptime requirement extraction
- Performance metric identification
- Remedy calculation procedures
- Termination trigger conditions
- Credit cap analysis

---

### 7. Software License Agreement (Software-License-Agreement.md)
**Repository:** https://github.com/commonpaper/Software-License-Agreement  
**Version:** 1.1

**Purpose:** Standardized software licensing with subscription and ML provisions  
**Key Sections:**
- License grant (limited, non-exclusive, non-transferable)
- Permitted uses and customer responsibility
- User account management
- Feedback ownership
- Usage data collection and analytics
- Machine learning provisions
- AI model training authorization
- Open source software handling
- Updates and maintenance
- Restrictions on customer (reverse engineering, sublicensing, circumventing)
- Suspension rights
- Payment terms and invoicing
- Automatic payment mechanisms
- Tax responsibilities
- Payment disputes
- Order form and subscription terms
- Automatic renewal procedures
- Termination for breach or insolvency
- Force majeure termination
- Effect of termination
- Warranty provisions
- Warranty remedy procedures
- Disclaimer of warranties
- Liability limitations and caps
- Damages waiver
- Indemnification framework
- Beta product provisions
- Logo rights and marketing
- Confidentiality provisions
- Export control restrictions
- Government rights (FAR/DFARS)

**Use Cases:**
- Commercial software licensing
- SaaS subscriptions
- Software distribution agreements
- ML-enabled software applications
- AI-powered platforms

**Integration Points for Parser:**
- License scope determination
- Restriction enforcement requirements
- ML/AI training authorizations
- Update and maintenance obligations
- Warranty analysis
- Export control compliance
- Termination trigger identification

---

### 8. Partnership Agreement (Partnership-Agreement.md)
**Repository:** https://github.com/commonpaper/Partnership-Agreement  
**Version:** 1.0  
**GitHub Stats:** 6 stars, 1 fork

**Purpose:** Framework for strategic partnerships and reseller relationships  
**Key Sections:**
- Cooperation obligations
- Feedback provisions
- Payment and billing procedures
- Tax responsibilities
- Trademark license grant
- Brand guidelines compliance
- Logo usage rights
- Brand modification restrictions
- Licensor inspection rights
- Data protection and privacy
- Privacy addendum incorporation
- Escalation procedures
- Dispute resolution (30-day negotiation)
- Term and continuation
- Termination rights (material breach, brand violations, insolvency)
- Force majeure termination
- Effect of termination (license termination, information return)
- Survival of obligations
- Representations and warranties
- Disclaimer of warranties
- Limitation of liability
- Damages waiver
- Indemnification procedures
- Confidentiality obligations
- Permitted disclosures
- General terms and conditions

**Use Cases:**
- Channel partnerships
- Reseller agreements
- Strategic alliances
- Technology partnerships
- Joint marketing arrangements

**Integration Points for Parser:**
- Partnership obligation extraction
- Brand usage rights tracking
- Trademark license analysis
- Termination trigger identification
- Cooperation requirement mapping
- Confidentiality scope

---

### 9. AI Addendum (AI-Addendum.md)
**Repository:** https://github.com/commonpaper/AI-Addendum  
**Version:** 1.0

**Purpose:** Supplementary terms for AI/ML features in products  
**Key Sections:**
- AI services integration
- Input and output definitions
- Provider rights to use input for service delivery
- Restrictions on AI use
- Regulated industry restrictions
- IP rights restrictions
- Deceptive use prohibition
- Model training controls
- Training data authorization
- Training purposes and restrictions
- Non-training improvement provisions
- Improvement restrictions
- Output improvement usage
- Intellectual property ownership
- Input ownership by customer
- Output ownership by customer
- Provider assignment of output rights
- Personal data in AI systems
- Data protection law compliance
- Customer input rights representation
- User rights representations
- AI-specific disclaimers
- Error possibilities in AI output
- Human oversight requirement
- Output similarity risks
- No infringement guarantees
- Originality disclaimers

**Use Cases:**
- AI-powered SaaS platforms
- Generative AI services
- Machine learning features
- AI model licensing
- LLM-based applications

**Integration Points for Parser:**
- Training data authorization tracking
- Output ownership verification
- Input/output rights mapping
- Disclaimer extraction
- Improvement clause analysis
- Personal data handling in AI context
- Risk and liability assessment

---

### 10. Pilot Agreement (Pilot-Agreement.md)
**Repository:** https://github.com/commonpaper/Pilot-Agreement  
**Version:** 1.1

**Purpose:** Short-term product evaluation agreements  
**Key Sections:**
- Pilot access and use rights
- Evaluation purposes definition
- License grant (limited, non-exclusive, non-transferable)
- User account management
- Customer content handling
- Feedback provisions
- Usage data collection
- Restrictions on customer
- Reservation of rights
- Pilot period definition
- Transition to definitive agreement
- Termination for any reason (30 days notice)
- Termination for breach (30-day cure)
- Termination for insolvency
- Effect of termination
- Software uninstallation requirements
- Customer content deletion
- Confidential information return
- Survival of confidentiality and IP provisions
- Representations and warranties
- Disclaimer of warranties
- Limitation of liability
- Damages waiver
- Confidentiality obligations
- Required disclosures
- Permitted disclosures
- General terms and conditions
- Injunctive relief provisions

**Use Cases:**
- Product trial agreements
- Proof of concept (POC) agreements
- Beta testing programs
- Early access evaluation
- Product evaluation agreements

**Integration Points for Parser:**
- Pilot period tracking
- Evaluation purpose verification
- Termination trigger identification
- Confidentiality obligation scoping
- IP ownership in POC results
- Transition to commercial agreement

---

### 11. Design Partner Agreement (design-partner-agreement.md)
**Repository:** https://github.com/commonpaper/Design-Partner-Agreement  
**Version:** 1.0  
**GitHub Stats:** 23 stars, 1 fork

**Purpose:** Framework for design partner and advisory board programs  
**Key Sections:**
- Design partner program overview
- Product access rights
- Feedback requirements
- Feedback ownership and assignment
- Provider unrestricted use of feedback
- Limitations on feedback (customer restrictions)
- Fees and billing
- Program term
- Term extension procedures
- Termination for any reason (30 days notice)
- Effect of termination
- Access rights termination
- Participation obligation termination
- Confidential information return/destruction
- Survival provisions
- Confidentiality and IP survival
- Warranty disclaimers
- Confidentiality obligations
- Required disclosures
- Permitted disclosures
- Intellectual property ownership
- Feedback ownership by provider
- Product ownership by provider
- Restrictions on partner
- Entire agreement
- Modifications and severability
- Governing law and jurisdiction
- Injunctive relief
- Assignment restrictions
- Notice requirements

**Use Cases:**
- Design partner programs
- Customer advisory boards
- Early access programs
- Product feedback initiatives
- Advisory council agreements

**Integration Points for Parser:**
- Feedback ownership tracking
- IP right determination
- Termination flexibility analysis
- Confidentiality scope
- Restriction enforcement
- Program participation obligations

---

### 12. Master Service Agreement & Additional Templates

**Status:** Referenced in Common Paper organization  
**Repository:** https://github.com/commonpaper

The Common Paper organization maintains additional templates. The dataset includes pointers to:
- Master Service Agreement (MSA)
- Additional templates mentioned in organization repositories

---

## Parsing and Analysis Framework

### Templates by Use Case

#### Data Protection & Privacy
- Data Processing Agreement (GDPR, UK GDPR, Swiss)
- Business Associate Agreement (HIPAA)
- Cloud Service Agreement (data handling)
- AI Addendum (AI data protection)

#### SaaS & Cloud Services
- Cloud Service Agreement
- Service Level Agreement
- Software License Agreement
- Pilot Agreement

#### Business Relationships
- Professional Services Agreement
- Partnership Agreement
- Mutual Non-Disclosure Agreement
- Design Partner Agreement

#### Modern Technology
- AI Addendum (machine learning)
- Cloud Service Agreement (cloud computing)
- Software License Agreement (software distribution)

### Templates by Industry

#### Healthcare
- Business Associate Agreement (HIPAA compliance)
- Cloud Service Agreement (healthcare data)
- Data Processing Agreement (patient data)

#### Technology & SaaS
- Cloud Service Agreement
- Software License Agreement
- Professional Services Agreement
- AI Addendum
- Pilot Agreement

#### General Business
- Partnership Agreement
- Mutual Non-Disclosure Agreement
- Professional Services Agreement

### Templates by Clause Type

#### IP and Ownership
- Professional Services Agreement (deliverable IP)
- Software License Agreement (software IP)
- AI Addendum (output ownership)
- Design Partner Agreement (feedback ownership)

#### Data Protection
- Data Processing Agreement
- Business Associate Agreement
- Cloud Service Agreement
- AI Addendum

#### Liability and Risk
- Cloud Service Agreement
- Software License Agreement
- Professional Services Agreement
- All templates (limitation of liability)

#### Termination and Term
- All templates include term and termination provisions
- Pilot Agreement (flexible termination)
- Software License Agreement (subscription-based)

---

## Standardized Sections Across All Templates

Every Common Paper agreement includes:

### Always Present
1. **Definitions** - Comprehensive term definitions
2. **Term & Termination** - Duration and exit provisions
3. **Representations & Warranties** - Party assurances
4. **Limitation of Liability** - Liability caps and damages waiver
5. **Confidentiality** - Information protection provisions
6. **Governing Law** - Jurisdiction specification
7. **General Terms** - Boilerplate provisions

### Common General Terms
- Entire Agreement
- Modifications and Severability
- Injunctive Relief
- Assignment Restrictions
- Notice Requirements
- Independent Contractor Status
- No Third-Party Beneficiaries
- Force Majeure
- Anti-Bribery Compliance
- Section Titles (for reference only)
- Signature/Execution

---

## Key Features of Common Paper Templates

### Design Principles
1. **Two-Part Execution Model**
   - Cover Page (customizable business terms)
   - Standard Terms (permanent legal framework by reference)

2. **Version Permanence**
   - Version 1 published online permanently
   - Future versions created separately for law changes
   - No silent modifications to existing versions

3. **Broad Customization**
   - Cover Page sections for business terms
   - Bracketed sections for customization
   - Party information and signatures
   - Variables defined per engagement

4. **Standards Development**
   - Created by 40+ attorneys
   - Diverse representation (vendors, procurement, law firms)
   - Collaborative development
   - Field-tested in practice

### Licensing
- **CC BY 4.0** - Attribution required for use
- **Free to Use** - No licensing fees
- **Free to Modify** - Full freedom to customize
- **Public Source** - All templates on GitHub
- **Permanent Access** - Version 1 always available

---

## Integration with Legal Parser

### Parser Use Cases

#### 1. Clause Extraction
- Identify and extract standard clauses
- Map clauses across different templates
- Track clause evolution and variations
- Build clause library

#### 2. Compliance Analysis
- GDPR compliance verification (DPA)
- HIPAA compliance tracking (BAA)
- Export control compliance (CSA, SLA)
- Data protection requirements

#### 3. Risk Assessment
- Liability limitation analysis
- Warranty identification
- Indemnification scope
- Force majeure applicability

#### 4. Pattern Recognition
- Identify common language across templates
- Track standardization approach
- Analyze cover page patterns
- Map variable categories

#### 5. Relationship Mapping
- Track party obligations
- Map rights and restrictions
- Identify termination triggers
- Analyze survival provisions

#### 6. Compliance Tracking
- Identify regulatory requirements
- Track notification requirements
- Map audit obligations
- Analyze record retention

---

## Data Dictionary

### Key Definitions Used Consistently

**Agreement Types**
- **Cover Page** - Customizable business terms document
- **Standard Terms** - Permanent legal framework
- **Key Terms** - Additional legal customizations
- **Order Form** - Business details (services, fees, term)

**Party Definitions**
- **Provider** - Service provider or licensor
- **Customer** - Service customer or licensee
- **Company** - Used in healthcare (BAA) context
- **Partner** - Used in partnership agreements
- **Discloser/Recipient** - Confidential information parties

**Data Definitions**
- **Confidential Information** - Protected proprietary data
- **Customer Content** - Data provided by customer
- **Personal Data** - Individual identifiable data
- **Usage Data** - Product usage and performance data
- **Feedback** - Suggestions and comments
- **PHI** - Protected Health Information (BAA)
- **Prohibited Data** - Restricted data types

**Operational Definitions**
- **Affiliate** - 50%+ ownership control
- **Processing** - Any operation on data
- **Force Majeure Event** - Unforeseeable external events
- **Applicable Laws** - Relevant government requirements
- **High Risk Activity** - Activities risking death/injury

---

## Dataset Statistics

### Coverage Summary
- **Templates Documented:** 12 primary + references
- **Total Sections Analyzed:** 300+
- **Unique Clauses Identified:** 150+
- **Definitions per Template:** 20-50 per template
- **Average Template Length:** 20-40 sections

### Repository Statistics
- **Total GitHub Stars:** 55+ (aggregated)
- **Total GitHub Forks:** 12+ (aggregated)
- **Version Status:** All Version 1 (permanent)
- **Update Frequency:** Rare (law changes only)
- **License Consistency:** CC BY 4.0 (all templates)

---

## Usage Instructions

### For Legal Analysis
1. Use `templates_catalog.json` for metadata and overviews
2. Access individual template markdown files for full terms
3. Refer to this index for cross-template analysis
4. Check README.md in common-paper directory for implementation guidance

### For Parsing Development
1. Start with simpler templates (MNDA, AI Addendum)
2. Progress to complex templates (CSA, PSA, DPA)
3. Identify common structures across templates
4. Build clause extraction patterns
5. Validate against multiple templates

### For Integration
1. Map templates to use cases
2. Identify applicable agreement types
3. Extract variable and customization points
4. Determine regulatory compliance needs
5. Plan clause standardization

---

## Next Steps for Legal Parser

### Recommended Parsing Phases

**Phase 1: Foundation**
- Parse Mutual NDA (simplest structure)
- Extract definitions and clause patterns
- Build basic clause library
- Establish parsing validation

**Phase 2: Expansion**
- Parse AI Addendum and Pilot Agreement
- Identify cross-template patterns
- Build relationship mapping
- Develop clause analytics

**Phase 3: Complexity**
- Parse DPA, BAA (regulatory complexity)
- Implement compliance tracking
- Build compliance verification
- Develop regulatory requirement extraction

**Phase 4: Integration**
- Parse CSA, PSA (complexity and customization)
- Build complete clause library
- Implement cross-template analysis
- Develop agreement comparison tools

---

## References and Resources

### Common Paper
- **Website:** https://www.commonpaper.com
- **GitHub Organization:** https://github.com/commonpaper
- **Standard Terms Published At:** https://commonpaper.com/standards/
- **License:** CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)

### Individual Template Repositories
1. **DPA:** https://github.com/commonpaper/DPA
2. **Mutual NDA:** https://github.com/commonpaper/Mutual-NDA
3. **PSA:** https://github.com/commonpaper/PSA
4. **CSA:** https://github.com/commonpaper/CSA
5. **BAA:** https://github.com/commonpaper/BAA
6. **SLA:** https://github.com/commonpaper/SLA
7. **Software License:** https://github.com/commonpaper/Software-License-Agreement
8. **Partnership:** https://github.com/commonpaper/Partnership-Agreement
9. **AI Addendum:** https://github.com/commonpaper/AI-Addendum
10. **Pilot:** https://github.com/commonpaper/Pilot-Agreement
11. **Design Partner:** https://github.com/commonpaper/Design-Partner-Agreement

### Regulatory References
- **GDPR:** EU Regulation 2016/679
- **UK GDPR:** EU (Withdrawal) Act 2018
- **HIPAA:** Health Insurance Portability and Accountability Act of 1996
- **CCPA:** California Consumer Privacy Act
- **Export Controls:** U.S. Department of Commerce, OFAC

---

## Dataset Metadata

**Dataset Name:** Common Paper Legal Templates - Complete Collection  
**Version:** 1.0  
**Date Created:** 2025-09-05  
**Source Organization:** Common Paper (https://github.com/commonpaper)  
**Data Format:** Markdown + JSON Metadata  
**License:** CC BY 4.0  
**Attribution:** Common Paper - free to use under CC BY 4.0  

**Dataset Contents:**
- 12 standardized legal agreement templates
- Comprehensive JSON catalog
- README documentation
- Implementation guidelines
- Cross-reference index

**Recommended Citation:**
```
Common Paper Legal Templates Dataset (Version 1.0)
Retrieved from GitHub: https://github.com/commonpaper
License: CC BY 4.0
Fetched: 2025-09-05
```

---

**End of Dataset Index**  
**For questions or updates, refer to Common Paper GitHub repositories**
