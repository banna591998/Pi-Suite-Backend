INSERT INTO "Permission" (id, action, resource, description, "createdAt")
VALUES 



(gen_random_uuid(), 'CREATE', 'WMS', 'Allows user to create warehouses, zones and spatial layouts', NOW()),
(gen_random_uuid(), 'READ', 'WMS', 'Allows user to view warehouse structures and capacity metrics', NOW()),
(gen_random_uuid(), 'UPDATE', 'WMS', 'Allows user to update warehouse layouts and zone rules', NOW()),
(gen_random_uuid(), 'DELETE', 'WMS', 'Allows user to delete warehouse structures', NOW()),

(gen_random_uuid(), 'CREATE', 'INVENTORY', 'Allows user to add inventory items, batches and serial numbers', NOW()),
(gen_random_uuid(), 'READ', 'INVENTORY', 'Allows user to view live stock count, FEFO, and safety stocks', NOW()),
(gen_random_uuid(), 'UPDATE', 'INVENTORY', 'Allows user to modify stock counts, reconcile, and cycle count', NOW()),
(gen_random_uuid(), 'DELETE', 'INVENTORY', 'Allows user to remove inventory items', NOW()),




(gen_random_uuid(), 'CREATE', 'TMS', 'Allows user to register fleet vehicles and create shipments', NOW()),
(gen_random_uuid(), 'READ', 'TMS', 'Allows user to view GPS tracking, routes, and freight rates', NOW()),
(gen_random_uuid(), 'UPDATE', 'TMS', 'Allows user to update shipment statuses, GPS locations, and eBOL', NOW()),
(gen_random_uuid(), 'DELETE', 'TMS', 'Allows user to cancel or delete shipments/fleet records', NOW()),

(gen_random_uuid(), 'CREATE', 'POD', 'Allows user to generate and configure Proof of Delivery rules', NOW()),
(gen_random_uuid(), 'READ', 'POD', 'Allows user to verify OTP and view digital delivery signatures', NOW()),
(gen_random_uuid(), 'UPDATE', 'POD', 'Allows user to update delivery confirmation logs', NOW()),
(gen_random_uuid(), 'DELETE', 'POD', 'Allows user to delete invalid PoD entries', NOW()),




(gen_random_uuid(), 'CREATE', 'PURCHASE_ORDER', 'Allows user to create POs and automated RFQs', NOW()),
(gen_random_uuid(), 'READ', 'PURCHASE_ORDER', 'Allows user to view PO lifecycles and vendor scorecards', NOW()),
(gen_random_uuid(), 'UPDATE', 'PURCHASE_ORDER', 'Allows user to approve or update PO terms and blanket agreements', NOW()),
(gen_random_uuid(), 'DELETE', 'PURCHASE_ORDER', 'Allows user to cancel purchase orders', NOW()),

(gen_random_uuid(), 'CREATE', 'VENDOR', 'Allows user to onboard suppliers and external portal accounts', NOW()),
(gen_random_uuid(), 'READ', 'VENDOR', 'Allows user to view vendor performance scorecards and contracts', NOW()),
(gen_random_uuid(), 'UPDATE', 'VENDOR', 'Allows user to update supplier contracts and agreements', NOW()),
(gen_random_uuid(), 'DELETE', 'VENDOR', 'Allows user to remove vendor profiles', NOW()),




(gen_random_uuid(), 'CREATE', 'MANUFACTURING', 'Allows user to create BOMs, Work Orders, and MPS plans', NOW()),
(gen_random_uuid(), 'READ', 'MANUFACTURING', 'Allows user to monitor shop floors, MRP calculations, and OEE', NOW()),
(gen_random_uuid(), 'UPDATE', 'MANUFACTURING', 'Allows user to update production routes and machine capacity', NOW()),
(gen_random_uuid(), 'DELETE', 'MANUFACTURING', 'Allows user to delete production orders', NOW()),




(gen_random_uuid(), 'CREATE', 'ORDER', 'Allows user to aggregate multi-channel orders and set ATP', NOW()),
(gen_random_uuid(), 'READ', 'ORDER', 'Allows user to view backorders, drop-shipping, and invoices', NOW()),
(gen_random_uuid(), 'UPDATE', 'ORDER', 'Allows user to modify order allocations and dynamic pricing', NOW()),
(gen_random_uuid(), 'DELETE', 'ORDER', 'Allows user to cancel customer orders', NOW()),




(gen_random_uuid(), 'CREATE', 'FINANCE', 'Allows user to setup ledgers, tax rules, and landed costs', NOW()),
(gen_random_uuid(), 'READ', 'FINANCE', 'Allows user to view COGS, multi-currency ledgers, and margins', NOW()),
(gen_random_uuid(), 'UPDATE', 'FINANCE', 'Allows user to update tax configurations and billing rules', NOW()),
(gen_random_uuid(), 'DELETE', 'FINANCE', 'Allows user to delete financial records', NOW()),

(gen_random_uuid(), 'CREATE', 'ASSET', 'Allows user to register heavy equipment and fixed assets', NOW()),
(gen_random_uuid(), 'READ', 'ASSET', 'Allows user to view predictive maintenance and depreciation', NOW()),
(gen_random_uuid(), 'UPDATE', 'ASSET', 'Allows user to update asset schedules and spare parts stock', NOW()),
(gen_random_uuid(), 'DELETE', 'ASSET', 'Allows user to remove asset entries', NOW()),




(gen_random_uuid(), 'CREATE', 'AI_FORECAST', 'Allows user to train AI time-series demand models', NOW()),
(gen_random_uuid(), 'READ', 'AI_FORECAST', 'Allows user to view demand predictions, anomaly flags, and ETAs', NOW()),
(gen_random_uuid(), 'UPDATE', 'AI_FORECAST', 'Allows user to recalibrate AI parameters and anomaly thresholds', NOW()),
(gen_random_uuid(), 'DELETE', 'AI_FORECAST', 'Allows user to reset AI prediction logs', NOW()),




(gen_random_uuid(), 'CREATE', 'ROLE', 'Allows user to create system roles and assign policies', NOW()),
(gen_random_uuid(), 'READ', 'ROLE', 'Allows user to view role matrices and granular permissions', NOW()),
(gen_random_uuid(), 'UPDATE', 'ROLE', 'Allows user to modify role permissions and access levels', NOW()),
(gen_random_uuid(), 'DELETE', 'ROLE', 'Allows user to delete custom roles', NOW()),

(gen_random_uuid(), 'CREATE', 'AUDIT_LOG', 'Allows system to record audit trails and activity logs', NOW()),
(gen_random_uuid(), 'READ', 'AUDIT_LOG', 'Allows compliance auditors to view system audit trails and SLAs', NOW()),
(gen_random_uuid(), 'UPDATE', 'AUDIT_LOG', 'Allows system admins to update log retention configurations', NOW()),
(gen_random_uuid(), 'DELETE', 'AUDIT_LOG', 'Allows secure purging of archived audit logs per GDPR protocol', NOW())

ON CONFLICT (action, resource) DO NOTHING;